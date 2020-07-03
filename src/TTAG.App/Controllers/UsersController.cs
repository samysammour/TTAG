using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
        private readonly IMapper mapper;
        private readonly IUserRepository userRepository;

        public UsersController(ILogger<UsersController> logger, IUserService service, IMapper _mapper, IUserRepository userRepository)
        {
            this.logger = logger;
            this.service = service;
            mapper = _mapper;
            this.userRepository = userRepository;
        }

        [HttpPost]
        [Route("Add")]
        public async Task<User> AddAsync(User user)
        {
            return await this.service.AddOrUpdateAsync(user).ConfigureAwait(false);
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string Username, string Password)
        {
            return Ok(service.Login(Username, Password));
        }

        [HttpGet]
        public async Task< IActionResult> GetUser(string Id)
        {
            return Ok(mapper.Map<TTAG.Domain.Model.User,UserViewModel>(await userRepository.GetByIdAsync(Id)));
        }


        [HttpGet("TestYourToken")]
        [Authorize]
        public IActionResult TestYourToken(string Username, string Password)
        {
            var identity = User.Identity as ClaimsIdentity;
            IEnumerable<Claim> claims = identity.Claims;
            var idclaim = claims.Where(x => x.Type == "Id").FirstOrDefault();
            return Ok(idclaim.Value);
        }
    }
}
