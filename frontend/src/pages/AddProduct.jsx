import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrls: ['', '', ''] });

    const sampleData = {
        Gitar: { name: "Yamaha C40 Klasik Gitar", price: "3200", img: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1" },
        Piyano: { name: "Yamaha B1 Duvar Piyanosu", price: "145000", img: "https://images.unsplash.com/photo-1520529611473-d58f1" },
        Keman: { name: "Profesyonel El Yapımı Keman", price: "18500", img: "https://images.unsplash.com/photo-1612225232571-f736" }
    };

    const fastFill = (type) => {
        const item = sampleData[type];
        setProduct({ ...product, name: item.name, price: item.price, imageUrls: [item.img, item.img, item.img] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // [cite: 10, 18] Login sırasında kaydedilen token'ı alıyoruz
        const token = localStorage.getItem("token"); 

        try {
            const cleanPrice = parseInt(product.price.toString().replace(/\D/g, ''), 10);
            
            const payload = {
                name: product.name,
                price: cleanPrice,
                description: product.description || "Açıklama girilmedi.",
                imageUrls: product.imageUrls.filter(u => u.trim() !== '')
            };

            // Ödev gereği JWT Token isteğe ekleniyor [cite: 10, 43]
            await axios.post('http://localhost:5222/api/Products', payload, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            alert("İlan Başarıyla Yayınlandı!");
            navigate('/');
        } catch (err) {
            console.error("Hata Detayı:", err.response?.data);
            alert("Hata: " + (err.response?.data?.message || "Yetki hatası! Lütfen tekrar giriş yapın."));
        }
    };

    // Form arayüzü kodun geri kalanı aynı kalabilir...
    return (
        // ... Mevcut return kodun ...
        <div className="max-w-2xl mx-auto p-8">
             {/* Form içeriği buraya gelecek */}
             <button onClick={handleSubmit} className="w-full bg-blue-600 text-white p-4 rounded-lg">İLANINIZI YAYINLAYIN</button>
        </div>
    );
};

export default AddProduct;