import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5222/api/Products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="text-center mt-20">Yükleniyor...</div>;

  // Veri her iki formatta da gelebilir, ikisini de kontrol et
  const name = product.name || product.Name;
  const price = product.price || product.Price;
  const description = product.description || product.Description;
  const images = product.imageUrls || product.ImageUrls || [];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <Link to="/" className="mb-4 inline-block text-blue-600">← Geri Dön</Link>
      <div className="bg-white rounded-3xl shadow-2xl p-8 border">
        <h1 className="text-4xl font-black mb-6">{name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {Array.isArray(images) && images.map((url, index) => (
            <div key={index} className="h-64 rounded-xl overflow-hidden border">
              <img src={url} className="w-full h-full object-cover" alt="Enstrüman" />
            </div>
          ))}
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl">
          <p className="text-3xl font-black text-indigo-600 mb-4">{price?.toLocaleString()} TL</p>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;