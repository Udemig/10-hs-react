/*
 * Interface type'larda da olduğu gibi farklı bir/birkaç interfac e'in özelliklerini miras alabilir. Bunu extends anahtar kelimesi ile yapar. Sınıflardan farklı olarak istersek birden fazla interface'i miras alabilir.
 */

interface EvEsyasi {
  isim: string;
  fiyat: number;
}

// Mobilya interface'ine EvEsyasi interface'nini bütün tiplerini miras aldık
interface Mobilya extends EvEsyasi {
  renk?: string;
}

const masa: Mobilya = {
  isim: "Yemek Masası",
  fiyat: 200000,
  renk: "Siyah",
};

// farklı bir interface tanımlayalım
interface Elektronik {
  marka: string;
  garantiSuresi: number;
  şarj?: number;
}

// birden fazla interface'i miras alma
interface Urun extends Mobilya, Elektronik {
  id: string;
}

const tv: Urun = {
  marka: "LG",
  isim: "Smart Tv",
  garantiSuresi: 2,
  renk: "Beyaz",
  fiyat: 389999,
  id: "2342dsffsd324",
  şarj: 100,
};

// SORU: İlk olarak 2 farklı interface oluşturun
// Ardından 3.biri interface oluşturup ilk 2 interface'i miras alıp genişletin.
// Son olarak bu interface'i 1 nesnenin tipini tanımlarken kullanın

// CEVAP - 1
interface Kitap {
  Adı: string;
  Sayfa: number;
}

interface Film {
  Türü: string;
  Süresi: number;
}

interface Ürün extends Kitap, Film {
  ID: string;
}

const Kitap1: Ürün = {
  Adı: "ABC",
  Sayfa: 234,
  Türü: "Aksiyon",
  Süresi: 256,
  ID: "123hshaqw",
};

// CEVAP - 2
interface Turlar {
  fiyat: number;
  yer: string;
}
interface Ulasim extends Turlar {
  HavaYolu?: boolean;
  karaYoLU?: boolean;
  denizYolu?: boolean;
}
interface Italya extends Turlar, Ulasim {
  tarih: string;
}
const italy: Italya = {
  fiyat: 250,
  yer: "italy",
  HavaYolu: true,
  tarih: "17.08.2024",
};

// CEVAP - 3
interface IArac {
  marka: string;
  model: string;
  yıl: number;
}

interface IMotor {
  silindir: number;
  tip: "diesel" | "benzin";
}

interface Itoyota extends IArac, IMotor {
  renk: string;
}

const arabam: Itoyota = {
  marka: "toyota",
  model: "corolla",
  yıl: 2001,
  silindir: 4,
  tip: "diesel",
  renk: "mavi",
};

// CEVAP - 4
interface Bilgisayar {
  marka: string;
  fiyat: number;
  islemci: string;
  tipi: "Masaüstü" | "Laptop";
}

interface Windows {
  isletim_sistemi: string;
}

interface MSI extends Bilgisayar, Windows {
  garanti: boolean;
}

const PC: MSI = {
  marka: "MSI",
  tipi: "Laptop",
  fiyat: 40000,
  islemci: "Ryzen",
  isletim_sistemi: "Windows 10",
  garanti: true,
};
