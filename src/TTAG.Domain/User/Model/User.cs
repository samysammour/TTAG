namespace TTAG.Domain.Model
{
    using Newtonsoft.Json;
    using System;
    using TTAG.Common;

    public class User : Entity
    {
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Email { get; set; }

        public string Password { get; set; }

        public UserRoles Role { get; set; }
    }
}
