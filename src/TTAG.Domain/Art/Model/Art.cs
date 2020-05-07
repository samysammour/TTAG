namespace TTAG.Domain.Model
{
    using Newtonsoft.Json;
    using System;
    using TTAG.Common;

    public class Art : Entity
    {
        public string Name { get; set; }

        public ArtCategory Category { get; set; }

        public Address Address { get; set; } = new Address();
    }

    public static partial class Extensions
    {
        public static string AddName(this Art art, string value) => art.Name = value;
    }

    public class x
    {
        public x()
        {
            var art = new Art();
            art.AddName("samy");
        }
    }
}
