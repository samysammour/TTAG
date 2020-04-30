using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TTAG.Domain.Model;
using TTAG.Domain.Repository;
using TTAG.Domain.Service;
using TTAG.Infrastructure.Azure;

namespace TTAK.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> logger;
        private readonly IUserService service;

        public UsersController(ILogger<UsersController> logger, IUserService service)
        {
            this.logger = logger;
            this.service = service;
        }

        [HttpPost]
        public async Task<User> AddAsync(User art)
        {
            return await this.service.AddOrUpdateAsync(art).ConfigureAwait(false);
        }
    }
}
