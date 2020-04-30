namespace TTAG.Domain.Service
{
    using Model;
    using System;
    using System.Threading.Tasks;
    using TTAG.Domain.Repository;
    using TTAG.Domain.Validation;

    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;

        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public async Task<User> AddOrUpdateAsync(User user)
        {
            var validator = new UserValidator(user);
            if (!validator.IsValid())
            {
                throw new Exception(validator.GetMessage());
            }

            user = await this.userRepository.AddOrUpdateAsync(user).ConfigureAwait(false);
            return user;
        }
    }
}
