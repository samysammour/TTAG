using TTAG.Domain.Model;

namespace TTAG.Domain.Validation
{
    public class UserValidator : Validator
    {
        private readonly User user;

        public UserValidator(User user)
        {
            this.user = user;
        }

        public bool IsValid()
        {
            this.CheckNotNullOrEmpty(this.user.UserName, "UserName is empty");
            this.CheckNotNullOrEmpty(this.user.FirstName, "FirstName is empty");
            this.CheckNotNullOrEmpty(this.user.LastName, "LastName is empty");
            this.CheckNotNullOrEmpty(this.user.Email, "Email is empty");
            this.CheckEmail(this.user.Email, "Email is not valid");
            this.CheckNotNullOrEmpty(this.user.Password, "Password is empty");

            return !this.HasError;
        }
    }
}
