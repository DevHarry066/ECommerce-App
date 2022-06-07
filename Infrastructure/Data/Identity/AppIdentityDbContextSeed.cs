using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Identity
{
   public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bob@test.com",
                    UserName = "BobJenner",
                    Address = new Address
                    {
                        FirstName = "Bob",
                        LastName = "Jenner",
                        Street = "10th Street",
                        City = "New York",
                        State = "NY",
                        Zipcode = "90135"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$W0rd");
            }
        }
    }
}
