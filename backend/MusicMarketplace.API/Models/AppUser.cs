using Microsoft.AspNetCore.Identity;

namespace MusicMarketplace.API.Models
{
    public class AppUser : IdentityUser
    {
        
        public string FullName { get; set; }
    }
}