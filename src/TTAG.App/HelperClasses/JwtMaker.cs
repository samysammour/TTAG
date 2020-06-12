using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace TTAG.App.HelperClasses
{
    public static class JwtMaker
    {
        public static string GetToken(string UserId)
        {
            string securitykey = "this_TTAG_securitykey!@#$%^";
            var symmetricsecuritykey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securitykey));
            var signincredentials = new SigningCredentials(symmetricsecuritykey, SecurityAlgorithms.HmacSha256Signature);
            var claims = new List<Claim>();
            claims.Add(new Claim(JwtOurClaims.Id, UserId));
            var token = new JwtSecurityToken(

                issuer: "TTAG_App",
                audience: "TTAG_Users",
                expires: DateTime.Now.AddYears(2),
                claims: claims,
                signingCredentials: signincredentials
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
