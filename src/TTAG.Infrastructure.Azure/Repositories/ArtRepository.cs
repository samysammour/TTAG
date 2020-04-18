using System;
using System.Collections.Generic;
using System.Text;
using TTAG.Infrastructure.Azure;
using TTAG.Domain.Model;

namespace TTAG.Domain.Repository
{
    public class ArtRepository : CosmosDbRepository<Art>, IArtRepository
    {
        public ArtRepository()
            : base("category")
        {
        }
    }
}
