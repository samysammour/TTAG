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
}
