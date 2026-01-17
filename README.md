# Music Marketplace - Full Stack Proje Ödevi

Bu proje, ASP.NET Core Web API (Backend) ve React (Frontend) kullanılarak geliştirilmiş, kapsamlı bir müzik enstrümanı ve ekipmanı satış platformudur.

## 🚀 Proje Teknik Özellikleri

### Backend (ASP.NET Core Web API)
* **Kimlik Doğrulama:** JWT (JSON Web Token) tabanlı güvenli kayıt ve giriş sistemi.
* **Yetkilendirme:** Sistemde 'User' ve 'Admin' olmak üzere iki temel rol tanımlanmıştır.
* **Veritabanı Yönetimi:** Entity Framework Core (Code-First) kullanılmış ve migration yapısı ile yönetilmiştir.
* **CRUD İşlemleri:** Kategoriler ve Ürün ilanları için tam fonksiyonel veri yönetimi sağlanmıştır.
* **Gelişmiş API Özellikleri:** Ürün listelemede sayfalama (pagination), filtreleme ve sıralama fonksiyonları mevcuttur.
* **Mimari Yapı:** Veri güvenliği ve yönetimi için DTO (Data Transfer Object) kullanımı ve Swagger API dokümantasyonu eklenmiştir.

### Frontend (React)
* **Kullanıcı Ekranları:** Dinamik Register ve Login sayfaları geliştirilmiştir.
* **Güvenlik:** Yetkisiz kullanıcıların belirli sayfalara erişimini engelleyen 'Protected Route' yapısı kurulmuştur.
* **İlan Yönetimi:** Yeni ürün ekleme, detaylı listeleme ve ilan detay sayfaları hazırlanmıştır.
* **Kullanıcı Paneli:** Kullanıcıların kendi verdikleri ilanları görüntüleyip yönetebileceği alanlar mevcuttur.
* **Admin Paneli:** Admin kullanıcılar için merkezi kategori yönetim ekranı tasarlanmıştır.
* **Responsive Tasarım:** Uygulama tüm mobil ve masaüstü cihazlarla uyumlu (responsive) çalışmaktadır.

## 📝 İş Kuralları
* Kullanıcılar yalnızca kendilerine ait ilanlar üzerinde düzenleme ve silme işlemi yapabilir.
* Kategori oluşturma, güncelleme ve silme yetkisi yalnızca 'Admin' rolüne tanımlanmıştır.
* Ürün listeleme ekranında kullanıcı deneyimini artırmak için en az üç farklı filtreleme seçeneği sunulur.
* Her ürün/ilan detayında en az üç adet görsel desteği sunulmaktadır.

## 🛠️ Kurulum ve Çalıştırma

### 1. Backend Kurulumu
1. `backend/` klasörüne gidin.
2. Terminalde `dotnet ef database update` komutunu çalıştırarak veritabanını güncelleyin.
3. `dotnet run` komutu ile API'yi başlatın.

### 2. Frontend Kurulumu
1. `frontend/` klasörüne gidin.
2. `npm install` ile gerekli paketleri yükleyin.
3. `npm run dev` komutu ile uygulamayı lokalde ayağa kaldırın.

---
**Geliştiren:** Oğuzhan Karlı  
**Teslim Tarihi:** 17.01.2026