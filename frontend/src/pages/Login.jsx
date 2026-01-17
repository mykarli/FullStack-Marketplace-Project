import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5222/api/Auth/login', formData);
      login(res.data.token);
      alert("Giriş başarılı!");
      navigate('/');
    } catch (error) {
      alert("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Pazaryeri Giriş</h2>
        <div className="space-y-4">
          <input 
            type="email" placeholder="E-posta" 
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Şifre" 
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;