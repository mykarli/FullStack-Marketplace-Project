namespace MusicMarketplace.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Brand { get; set; } = string.Empty;
        
        // Yeni alan: Ürün Durumu
        public string Condition { get; set; } = "İkinci El"; 

        public string ImageUrl1 { get; set; } = string.Empty;
        public string ImageUrl2 { get; set; } = string.Empty;
        public string ImageUrl3 { get; set; } = string.Empty;

        public int CategoryId { get; set; }
        // AppUserId'yi opsiyonel (?) yapıyoruz ki hata vermesin, biz içeride dolduracağız.
        public string? AppUserId { get; set; } 
    }
}