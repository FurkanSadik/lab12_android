**PreferencesApp**
- Furkan Sadık Kocabaş
- 200404001
- Bilgisayar Mühendisliği (türkçe) 4. sınıf öğrencisi

**PreferencesApp**, Expo (React Native) kullanılarak geliştirilmiş; kullanıcı girişi, oturum kalıcılığı ve tema tercihleri gibi temel mobil uygulama kavramlarını içeren bir örnek uygulamadır.  
Proje, modern React mimari yaklaşımlarını kullanarak ölçeklenebilir, bakımı kolay ve prop drilling içermeyen bir yapı sunmayı hedefler.

---

## Projenin Amacı


Bu projenin amacı;

- Mobil uygulamalarda global state yönetiminin nasıl yapılacağını göstermek,
- Kullanıcı oturumlarının kalıcı hale getirilmesini sağlamak,
- Kullanıcı tercihlerinin (tema gibi) uygulama genelinde tutarlı şekilde yönetilmesini göstermek,
- React Navigation ile kontrollü ve güvenli ekran geçişleri sağlamaktır.

Proje, eğitim amaçlı olarak lab ödevi kapsamında istenen mimari ve teknik gereksinimleri karşılamaktadır.

---

## Temel Özellikler

- Kullanıcı girişi (Login sistemi)
- Oturum yönetimi (Context API)
- Oturum kalıcılığı (AsyncStorage)
- Açık / Koyu tema desteği (global tema sistemi) **(Bireysel olarak ekstra uğraşıldı)**
- React Navigation (Native Stack) ile sayfa geçişleri
- Ayarlar ekranı üzerinden tema değiştirme
- Ayarlar ekranı üzerinden çıkış yapma
- Uygulama açılışında kullanıcı varsa Login ekranını atlama

---

## Prop Drilling Durumu

Bu projede **prop drilling kullanılmamıştır**.

- Kullanıcı bilgileri `AuthContext` içinde tutulur.
- Tema bilgileri `ThemeContext` içinde tutulur.
- Login, Home ve Settings ekranları gerekli verilere doğrudan Context üzerinden erişir.

Bu sayede:
- Gereksiz prop zincirleri oluşturulmamıştır.
- Bileşenler arası bağımlılık azaltılmıştır.
- Daha temiz ve sürdürülebilir bir mimari elde edilmiştir.

