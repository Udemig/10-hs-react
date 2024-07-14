/*
 * Tür Dönüşümü

 * Örn kullanıcın sepetindeki ürünleri api'dan alıyoruz ancak bu ürünlerin fiyatı api'dan bazen string bazen number olarak geliyor. Eğerki uygulamada fonksiyon içerisinde fiyatları number olarak görmek istiyorsak tür dönüşümü yapabilirz.
*/

type Product = {
  name: string;
  price: number | string;
};

let product1: Product = {
  name: "Laptop",
  price: 560000,
};

let product2: Product = {
  name: "Phone",
  price: "150000",
};

// let newPrice1 = product1.price - 200; // price string olabilceğinden hata verir

// tür dönüşümü ile normalde tipi string veya number olan price değişkeninden 200 sayısını çıkarıken ts derleyecisine bunu nymber olarak varsay diyerek (tür dönüşümü yaparak) hatayı engelledik
let newPrice2 = (product1.price as number) - 200;

// Örnek - 2
let kisi: unknown = {
  name: "John",
  age: 55,
  adress: "123 main st.",
};

interface IPerson {
  name: string;
  age: number;
  adress: string;
}

// kişi tipi başlangıçta tanımsız olduğu için name'ine erişirken hata verir
// console.log(kisi.name);

// ts'e kişi tipini IPerson olarak varsaymasını istersem sorun olmadan name'e erişiriz
console.log((kisi as IPerson).name);
