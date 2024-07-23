# Tanstack Query

- Eski adıyla react-query kütüphanesi, react uygulqamalrında api'dan alınan verileri verimli ve kolay bir şekilde yönetmek için kullanılan yaygın bir kütüphanedir. Veri alımı, Veri Yönetimi, Önbellekleme (Caching) işlemlerini yapar.

# Temel Kavramlar

1. Query (Sorgu): Sayfa yüklendiği anda verileri almak için kullandığımız yöntem. (get)

2. Mutation: Sayfa yüklendiği anda değil istediğimiz zaman (butona tıklanma) api isteği atmak için kullanılır. (get,post,put,delete)

3. Cache (Önbellek): React Query, alınan verileri otomatik olarak önbelleğe alır ve gerektiğinde önbellekteki verileri kullanrak performansı arttırır.

4. Devtools (Geliştirici Araçları): React query kullandığımız uygulamlardaki sorguları ve mutation'ları izleme ve yönetmemezi sağlayan eklenti.

5. Invalidate: Mevcut sorgunun tekrar çağrılması olayı.

# Kurulum

- npm i @tanstack/react-query
- main.jsx'de provider'ı tanıt

# Kütüphaneler

- @tanstack/react-query
- @tanstack/react-query-devtools
- axios
- react-toastify
- react-router-dom
- react-icons
- tailwind
