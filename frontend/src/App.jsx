import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

// Sayfalar
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import AddProduct from './pages/AddProduct';
import MyAds from './pages/MyAds';
import AdminCategories from './pages/AdminCategories';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* bg-white ve min-h-screen siyah ekranı beyaz yapar */}
        <div className="min-h-screen bg-white text-black">
          <Navbar />
          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              
              <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
              <Route path="/my-ads" element={<ProtectedRoute><MyAds /></ProtectedRoute>} />
              
              <Route 
                path="/admin/categories" 
                element={
                  <ProtectedRoute role="Admin">
                    <AdminCategories />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;