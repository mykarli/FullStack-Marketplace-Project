import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-slate-900 text-white shadow-md">
      <Link to="/" className="text-xl font-bold">MUSIC MARKET</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-400">İlanlar</Link>
        
        {user ? (
          <>
            <Link to="/add-product" className="bg-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-700">İlan Ver</Link>
            <button onClick={() => { logout(); navigate('/login'); }} className="text-sm text-gray-300 hover:text-white">Çıkış</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400">Giriş Yap</Link>
            <Link to="/register" className="bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">Ücretsiz Kayıt Ol</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;