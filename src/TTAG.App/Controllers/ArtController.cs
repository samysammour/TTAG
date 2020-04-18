using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TTAG.Domain.Model;
using TTAG.Domain.Repository;
using TTAG.Infrastructure.Azure;

namespace TTAK.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArtController : ControllerBase
    {
        private readonly ILogger<ArtController> logger;
        private readonly IArtRepository repository;

        public ArtController(ILogger<ArtController> logger, IArtRepository repository)
        {
            this.logger = logger;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Art>> GetAllAsync()
        {
            return await Task.FromResult(this.repository.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<Art> GetAsync(string id)
        {
            return await this.repository.GetByIdAsync(id).ConfigureAwait(false);
        }

        [HttpPost]
        public async Task<Art> AddAsync(Art art)
        {
            return await this.repository.AddOrUpdateAsync(art).ConfigureAwait(false);
        }

        [HttpPut]
        public async Task<Art> UpdateAsync(Art art)
        {
            return await this.repository.AddOrUpdateAsync(art).ConfigureAwait(false);
        }

        [HttpDelete]
        public async Task<bool> DeleteAsync(string id)
        {
            return await this.repository.DeleteAsync(id).ConfigureAwait(false);
        }
    }
}
