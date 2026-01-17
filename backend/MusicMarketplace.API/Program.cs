using Microsoft.EntityFrameworkCore;
using MusicMarketplace.API.Data;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        // ÖNEMLİ: 'name' olarak gelen veriyi 'Name' ile otomatik eşleştirir
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        // ÖNEMLİ: "18500" gibi tırnaklı gelen sayıları otomatik olarak sayıya (int/decimal) çevirir
        options.JsonSerializerOptions.NumberHandling = JsonNumberHandling.AllowReadingFromString;
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", b => b.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
app.Run();