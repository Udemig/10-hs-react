/*
 * Type Aliases | Custom Type
 * Şu ana kadar tip ataması yaparken js'de var olan temel tiplere ekstra olarak bir iki tanae tip kullandık.
 * Gerçek projelerde o anki yaptığımız işe özel spesifik veri tiplerine ihtiyaç duyabiliyoeuz.
 
 * Bunları tanımlamak için type anaktar kelimesi kullanıyoruz.

 * Neden ihityacımız var?
 * Çümkü belirlediğimiz type projenin bir çok alnında sayfasında kullanılması gerekebilir. Bu noktada custom type kullanılarak kopyala yapıiıtın ve kod tekrarının önüne geçmiş oluruz
*/

// örnek - 1
type char = string;

let isim: char = "zeki";

// örnek - 2 aynı union type'ı projede defalarca kullanmak istedik
let foo: string | number | boolean = "merhaba";
let bar: string | number | boolean = 35;
let baz: string | number | boolean = true;

// yukarıdaki kod tekrarının çözümü type 'tan geçer
export type SNBType = string | number | boolean;

let foo1: SNBType = "merhaba";
let bar1: SNBType = 35;
let baz1: SNBType = true;

// SORUN: aynı tipin birden fazla kullanıcı için ihtiyaç duyulması
let user1: { name: string; age: number } = { name: "Ali", age: 40 };
let user2: { name: string; age: number } = { name: "Fatma", age: 20 };
let user3: { name: string; age: number } = { name: "Burak", age: 25 };

// tipi sadece değer tanımlarken değil proje içinde bir çok alanda kullanmamız gerekebilir
// örneğin kullanıcı tipinde veri alan bir fonksiyon olsun
let explain1 = (user: { name: string; age: number }) => {};

// ÇÖZÜM: Kendi tipimizi oluşturma
type User = { name: string; age: number };

let user4: User = { name: "Ali", age: 40 };
let user5: User = { name: "Fatma", age: 20 };
let user6: User = { name: "Burak", age: 25 };

let explain2 = (user: User) => {};

// Örneğin tuple için kendi tipimizi oluşturalım
type Geo = [number, number];

let xCoords: Geo = [123, 455];
let yCoords: Geo = [793, 147];

// Oluşturduğumuz custom type'ları sadece değişken tanımlarken değil fonksiyon tipi tanımlarken dizi tipi tanımlarken kısace tip tanımı yapabileceğimiz her yerde kendi oluşturuğumuz tipleri kullanabiliriz

const flightRoute: Geo[] = [
  [12, 67],
  [62, 85],
  [25, 14],
  [86, 24],
];
