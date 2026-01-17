const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      {/* Detay sayfasında en az 3 görsel desteği istendiği için ilk görseli burada gösteriyoruz [cite: 29] */}
      <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.price} TL</p>
      <p>Kategori: {product.categoryName}</p>
      <button onClick={() => window.location.href = `/product/${product.id}`}>Detaya Git</button>
    </div>
  );
};

export default ProductCard;