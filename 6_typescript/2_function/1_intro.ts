/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlamaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamak tan ibarettir.
 */

function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucu: " + (a + b);
}

const sonuc = hesaplama(34, 57);

console.log(sonuc);

/*
 * Javascript Fonksiyon Türleri
 * 1- İsimli Fonksiyon
 * 2- İsimsiz Fonksiyon
 * 3- Ok Fonksiyon
 * 4- Tek Satır Fonksiyon
 * 5- Immediate Call (Acil Çağrılan) Fonksiyon
 */

// 1) İsimli Fonksiyon
function hesapla(a: number): string {
  return "Sonuç: " + a * 2;
}

// 2) İsimsiz Fonksiyon
const noNameFunc = function (a: number): string {
  return "Sonuç: " + a * 2;
};

// 3) Ok Fonksiyon
const arrowFunc = (a: number): string => {
  return "Sonuç: " + a * 2;
};

// 4) Tek Satır Fonksiyon
const singleLineFunc = (a: number): string => "Sonuç: " + a * 2;

// 5) Immediate Call
// Tanımlandığı gibi çağrılan fonksiyonlara verilen isim
// Eğerki dosya içerisinde bir daha kullanılmayacaksa tercih ederiz

// a) normal fonksiyon
const exaFunc = (par: number) => {
  console.log(par + "normal fonksiyon çapğrıldı");
};
exaFunc(10);

// b) immediate call
(function (par: number) {
  console.log(par + "immediate call fonksiyon çapğrıldı");
})(10);

// Soru: Fonksiyon tipi tanımlarken kendi oluşturduğumuz tiperide kullanabilir miyiz.

// Cevap: Evet, fonksiyonun parametre ver return tipini tanımlarken kendi oluşturduğumuz tipleri kullanabiliriz.

type UserType = {
  name: string;
  surname: string;
  age?: number;
};

let createUser = (user: UserType): UserType[] => {
  return [user, user, user];
};

createUser({
  name: "Fuat",
  surname: "Sarı",
});
