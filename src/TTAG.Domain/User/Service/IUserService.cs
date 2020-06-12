namespace TTAG.Domain.Service
{
    using Model;
    using System.Threading.Tasks;

    public interface IUserService
    {
        Task<User> AddOrUpdateAsync(User user);

        string Login(string Username, string Password);
    }
}
