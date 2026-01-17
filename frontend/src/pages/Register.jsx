import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5222/api/Auth/register', formData);
      alert("Kayıt Başarılı! Şimdi giriş yapabilirsiniz.");
      navigate('/login');
    } catch (error) {
      const errorData = error.response?.data;
      let msg = "Hata oluştu!";
      if (Array.isArray(errorData)) {
        msg = errorData.map(x => x.description).join("\n");
      } else if (typeof errorData === 'string') {
        msg = errorData;
      }
      alert(msg);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Kayıt Ol</h2>
        <input type="text" placeholder="Kullanıcı Adı" className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFormData({...formData, username: e.target.value})} />
        <input type="email" placeholder="E-posta" className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="Şifre" className="w-full border p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <button className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition-colors">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default Register;