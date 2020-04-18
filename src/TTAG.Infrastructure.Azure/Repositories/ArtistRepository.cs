using System;
using System.Collections.Generic;
using System.Text;
using TTAG.Infrastructure.Azure;
using TTAG.Domain.Model;

namespace TTAG.Domain.Repository
{
    public class ArtistRepository : CosmosDbRepository<Artist>, IArtistRepository
    {
        public ArtistRepository()
            : base("country")
        {
        }
    }
}
