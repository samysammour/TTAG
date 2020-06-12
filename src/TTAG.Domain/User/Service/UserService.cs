namespace TTAG.Domain.Service
{
    using Model;
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using TTAG.Domain.Cryptography;
    using TTAG.Domain.Repository;
    using TTAG.Domain.Validation;

    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;
        private readonly VividHashing hashing;

        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
            hashing = new VividHashing();
        }

        public async Task<User> AddOrUpdateAsync(User user)
        {

            var validator = new UserValidator(user);
            if (!validator.IsValid())
            {

                throw new Exception(validator.GetMessage());
            }
            var salt = hashing.GetSalt();
            var cipher = hashing.GetCipherText(user.Password, salt);

            user.Salt = salt;
            user.Password = cipher;

            user = await this.userRepository.AddOrUpdateAsync(user).ConfigureAwait(false);
            return user;
        }

        public string Login(string Username, string Password)
        {
            var user = userRepository.GetAll().Where(x => x.UserName == Username).FirstOrDefault();

            if (user == null)
                return string.Empty;

            var salt = user.Salt;

            if (hashing.CompareHash(Password, user.Password, salt))
            {
                return user.Id;
            }

            return string.Empty;
        }
    }
}
