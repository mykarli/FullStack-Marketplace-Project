import { useEffect, useState } from 'react';
import api from '../api';

const MyAds = () => {
  const [myProducts, setMyProducts] = useState([]);

  const fetchMyProducts = async () => {
    const res = await api.get('/products/my-products'); // Backend'de bu endpoint olmalı
    setMyProducts(res.data);
  };

  useEffect(() => { fetchMyProducts(); }, []);

  const handleDelete = async (id) => {
    if(window.confirm("Bu ilanı silmek istediğinize emin misiniz?")) {
      await api.delete(`/products/${id}`);
      fetchMyProducts(); // Listeyi güncelle
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Kendi İlanlarım</h2>
      <div className="grid gap-4">
        {myProducts.map(p => (
          <div key={p.id} className="flex justify-between items-center p-4 border rounded shadow-sm bg-white">
            <div className="flex items-center gap-4">
              <img src={p.imageUrl1} className="w-16 h-16 object-cover rounded" alt="" />
              <div>
                <h4 className="font-bold">{p.name}</h4>
                <p className="text-sm text-gray-500">{p.price} TL</p>
              </div>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-4 py-2 rounded">Sil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAds;