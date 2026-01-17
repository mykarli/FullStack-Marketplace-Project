using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicMarketplace.API.Data;
using MusicMarketplace.API.Models;
using System.Security.Claims; // Bu satır kullanıcı ID'sini okumak için şart

namespace MusicMarketplace.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [Authorize] // gereği: Sadece giriş yapanlar ilan ekleyebilir
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            // Giriş yapan kullanıcının ID'sini Token'dan alıyoruz
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized("Kullanıcı kimliği doğrulanamadı.");
            }

            // Veritabanındaki 'NOT NULL' hatasını çözen satır:
            product.AppUserId = userId; 

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return product;
        }
    }
}