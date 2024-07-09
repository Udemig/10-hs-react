/*
 * String Literal
 * Bir metnin tipini string olarak tanımlamak yerine alabileceğimiz değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip kısıtlaması yapabiliyoruz.

 * Örn: Bir spotify benzeri projede kullanıcıcak kullanıcı nesnesinin tipini oluşturmak istiyoruz id isim ve hesap tipi değerlerine sahip olucak. Hesap tipini ifade ederken stirng bir değer olucağını söylemek yerine zaten alabileceğei 2 - 3 farklı değer olduğu için string literal kullanarak kısıtlamayı daha doğru şekilde yapmış oluruz
*/

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium";
};

const newUser: User = {
  id: 12312,
  name: "Fadime",
  account_type: "premium",
};

// Örnek: Bir araba kiralama sitesi için api'dan gelen araba verilerinin tipini tanımla. sahip verisinin nasıll geldiğini bilmiyoruz

type Car = {
  make: string;
  model: string | number;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik" | "hibrit";
  year: number;
  owner: any;
};

const newCar: Car = {
  make: "Hyundai",
  model: "i20 N",
  gearbox: "manuel",
  fuel: "benzin",
  year: 2023,
  owner: null,
};
