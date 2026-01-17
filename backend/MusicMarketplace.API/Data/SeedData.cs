using Microsoft.AspNetCore.Identity;
using MusicMarketplace.API.Models;

namespace MusicMarketplace.API.Data
{
    public static class SeedData
    {
        public static async Task Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<AppDbContext>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<AppUser>>();

            if (!await roleManager.RoleExistsAsync("Admin")) await roleManager.CreateAsync(new IdentityRole("Admin"));
            if (!await roleManager.RoleExistsAsync("User")) await roleManager.CreateAsync(new IdentityRole("User"));

            if (!context.Categories.Any()) {
                context.Categories.AddRange(new Category { Name = "Gitar" }, new Category { Name = "Davul" });
                await context.SaveChangesAsync();
            }

            if (await userManager.FindByEmailAsync("admin@test.com") == null) {
                var admin = new AppUser { UserName = "admin@test.com", Email = "admin@test.com", FullName = "Admin" };
                await userManager.CreateAsync(admin, "Admin123!");
                await userManager.AddToRoleAsync(admin, "Admin");
            }
        }
    }
}