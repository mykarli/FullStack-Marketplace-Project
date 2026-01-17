import { useEffect, useState } from 'react';
import api from '../api';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  const fetchCategories = async () => {
    const res = await api.get('/categories');
    setCategories(res.data);
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post('/categories', { name: newCategoryName });
      setNewCategoryName('');
      fetchCategories();
      alert("Kategori eklendi!");
    } catch (error) {
      alert("Kategori eklenemedi. Yetkinizi kontrol edin.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu kategoriyi silmek istediğinize emin misiniz?")) {
      await api.delete(`/categories/${id}`);
      fetchCategories();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Admin Kategori Yönetimi</h2>
      
      {/* Kategori Ekleme Formu */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-8">
        <input 
          className="flex-1 border p-2 rounded" 
          type="text" 
          placeholder="Yeni Kategori Adı" 
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          required 
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Ekle</button>
      </form>

      {/* Kategori Listesi */}
      <div className="space-y-2">
        {categories.map(cat => (
          <div key={cat.id} className="flex justify-between items-center p-3 border rounded">
            <span>{cat.name}</span>
            <button 
              onClick={() => handleDelete(cat.id)} 
              className="text-red-500 hover:font-bold"
            >
              Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;