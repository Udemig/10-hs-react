# Vite Projesi İçin Adımlar

- `npm create vite klasör_ismi` belirttiğimiz isim bir klasör oluşturur ve içerisine vite projesini kurar.

- `npm create vite@lates .` terminalin bulunduğu klasöre vite projesini kurar.

- npm install >> node modules dosyasını indirir.

- npm run dev >> projeyi ayağa kaldırır.

# Vite Artıları

- Proje oluşturma / Ayağa kaldırma gibi işlemleri daha hızlı gerçekleştirir.

- Gereksiz kodlardan / dosyalardan arınmış bir react projesi oluşturur.

# JSON-SERVER

- Github:https://github.com/typicode/json-server

- Kendi bilgisayarımızda çalışan fake API oluşturmaya yarar.

- Kendimizi geliştirmek için yazdığımız basit projelerin backend ihtiyacını karşılar.(Proje yayınlanamaz çünkü api fake ve sadece bizim bilgisayarımızda çalışıyor)

- Json-server ile oluşturduğumuz api'a bütün http methodları ile istek atılabilir.

- Yaptığımız istek sonucunda eğer verilerde bir değişim olursa anlık olarak verilerin tutulduğu db.json dosyası güncellenir.

## JSON-SERVER Kurulum

- npm i json-server
- proje klasöründe db.json dosyası oluşturulur
- json-server --watch db.json (serverı ayağa kaldırdık)
- packege.json serverı ayağa kaldırma komutu ekleyip( "server": "json-server --watch db.json") npm run server diyerek serverı ayağa kaldırabilirsiniz.

## uuid

- Kurulum ve Kullanım
- npm i uuid
- import { v4 as uuidv4 } from 'uuid'; (as ismini değiştirmeye yarar)
- uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

## Axios

- Axios:https://axios-http.com/docs/intro
- npm i axios (kurulum)
- Yerleşik değil(javascript veya react içerisinden gelmiyor) pakedini indirmek gerekir.
- Hataları ve istekleri daha detaylı bir şekilde gösterilir.
- Veri gönderirken otomatik olarak js verisini json verisine çevirir.
- İsteklerde fetche göre daha az kod yazarız.

## fetch

- get

fetch("http://localhost:3000/todos").then((res)=>console.log(res)).catch((error)=>console.log(error));

- POST

fetch("http://localhost:3000/todos", {
method: "POST",
body: JSON.stringify(newTodo),
});

## axios

- GET

axios
.get("http://localhost:3000/todos/7c129279-896f-4701-9517-72c0635b2b63")
.then((res) => setTodos(res.data));
