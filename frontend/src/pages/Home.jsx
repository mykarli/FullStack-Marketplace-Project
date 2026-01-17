import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5222/api/Products');
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) { console.error(err); } 
      finally { setLoading(false); }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-20 font-bold text-gray-400 italic">Enstrümanlar Akort Ediliyor...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-10 border-b pb-6 flex justify-between items-end">
        <div>
           <h1 className="text-4xl font-black text-gray-900">Müzik Enstrümanları</h1>
           <p className="text-gray-500 mt-2">En kaliteli ekipmanlar burada.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <div key={p.id} className="group bg-white rounded-[32px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img src={p.imageUrls?.[0] || "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-sm border border-white">
                <span className="text-blue-600 font-black text-lg">{Number(p.price).toLocaleString()} TL</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-extrabold text-2xl text-gray-900 mb-6 truncate">{p.name || "Enstrüman İlanı"}</h3>
              <Link to={`/product/${p.id}`} className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">İlan Detayına Git →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;