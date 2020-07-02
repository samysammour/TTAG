namespace TTAG.Domain.Profile.Helpers
{
    using Profile.Model;
    using System.Security.Claims;

    public class ProfileHelper : IProfileHelper
    {
        public virtual Profile GetCurrentProfile()
        {
            var identity = ClaimsPrincipal.Current.Identity as ClaimsIdentity;
            return new Profile(identity);
        }

        public bool IsAdmin()
        {
            return true;
        }

        public bool IsAuthorized()
        {
            return true;
        }

        public string GetEmail()
        {
            return this.GetCurrentProfile().Email;
        }
    }
}
