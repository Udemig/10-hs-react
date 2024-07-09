/*
 * Constructor - İnşa Etme Methodu

 * Constructor methodu oluşturulan nesnenin özelliklerinin değerlerini dışarıdan almaya yarar.

 * Constructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olması.

 * Constructor new anahtar kelimesi ile class çağrıldığında ilk çalışan fonksiyondur
 */

class Person {
  // 1) Sınıfın özelliklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  // 2) Contrucor ile dışarından bu özelliklere değer atayalım
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }

  kendiniTanit() {
    console.log("selam");
  }
}

// sınıftan bir örnek oluşturuken constructor kod bloğunda tanımlı bütün parametreleri göndermeliyizz
const kisi1 = new Person("Burak", "Yıldız", 24);
const kisi2 = new Person("Kadir", "Satı", 24);

console.log(kisi1.kendiniTanit());
console.log(kisi2);

// SORU: Bir teknolojik alet için class yapısı oluşturunuz. Bu class'tan oluşturulcak nesnelerin değerlerini cosntructor yapısı ile dışarıdan alınız. Class en az 4 özellik 1 methoda sahip olsun.
// Class'tan en az 1 örnek oluşturun

// CEVAP
// class smartTV {
//   name: string;
//   model: string;
//   wirelessCharge: true;
//   softwareVersion: number;

//   remoteControl() {
//     console.log("Uzaktan kontrol edilebilir");
//   }
// }
// const rmt = new smartTV();

// cevap
class TeknolojikAlet {
  adi: string;
  markasi: string;
  modeli: number;

  constructor(yeni_adi: string, yeni_markasi: string, yeni_modeli: number) {
    this.adi = yeni_adi;
    this.markasi = yeni_markasi;
    this.modeli = yeni_modeli;
  }
}

const model1 = new TeknolojikAlet("ABC", "DEF", 2121);
const model2 = new TeknolojikAlet("xyz", "KLM", 1515);

console.log(model1);
console.log(model2);

// cevap
class DizüstüBilgisayar {
  marka: string;
  model: string;
  işlemci: string;
  ram: number;

  constructor(marka: string, model: string, işlemci: string, ram: number) {
    this.marka = marka;
    this.model = model;
    this.işlemci = işlemci;
    this.ram = ram;
  }
}

const bilgisayar = new DizüstüBilgisayar("lenova", "x-12", "i7", 16);

console.log(bilgisayar);

// cevap
class telefon {
  marka: String;
  Model: string;
  renk: string;
  fiyat: number;

  constructor(
    yeni_marka: String,
    yen_model: string,
    yeni_renk: string,
    yeni_fiyat: number
  ) {
    this.marka = yeni_marka;
    this.Model = yen_model;
    this.renk = yeni_renk;
    this.fiyat = yeni_fiyat;
  }
}

let telefon3 = new telefon("samsung", "Galaxy A15", "kırmızı", 15000);
let telefon4 = new telefon("Apple", "iphone15", "Gümüş", 30000);

console.log(telefon3);
console.log(telefon4);

//  cevap
class TV {
  marka: string;
  fiyat: number;
  Ethernet: boolean;
  aktifKanal: string;

  constructor(
    marka: string,
    yeni_fiyat: number,
    WIFI: boolean,
    yeniKanal: string
  ) {
    this.marka = marka;
    this.fiyat = yeni_fiyat;
    this.Ethernet = WIFI;
    this.aktifKanal = yeniKanal;
  }

  kanalDegis(yeniKanal: string) {
    this.aktifKanal = yeniKanal;
    console.log(`Kanal ${yeniKanal} açılıyor`);
  }
}

const TV1 = new TV("Vestel", 7000, true, "ATV");
console.log(TV1);
TV1.kanalDegis("FOX");
console.log(TV1);
