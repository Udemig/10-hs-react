class Sorter<T> {
  constructor(private data: T[]) {}

  getData(): T[] {
    return this.data.sort();
  }
}

const number = new Sorter<number | string>([3, 9, "burak", 1, 8, "ahmet"]);

console.log(number.getData());

// Generic Örnek
// Tipi generic olarak alsakda bazen kısıtlama yapmak isteyebilir.
// Mesela generic olarak alınan bir tipin sadece string | number | boolean tiplerini generic olarak alırken diğer tipleri almasını engelleyebilir.
class Container<T extends string | number | boolean> {
  private value: T;

  constructor(newValue: T) {
    this.value = newValue;
  }

  getValue(): T {
    return this.value;
  }
}

new Container<string>("merhaba");
new Container<number>(4);
new Container<boolean>(true);
// new Container<object>({ id: 1 });
// new Container<Date>(new Date());

// T generic tipini tanımlarken extend yardımıyla sadece number stirng veya boolean tiplerini alabilecek şekilde kısıtlma yaptık bundan kaynaklı generic tip olarka bu 3 tip dışarısında değer gönderemiyoruz

// Soru: En az 1 generic tip alan type / interface / class yazınız ve oluşturuğunuz bu yapıyı 1kez kullanın

type x<T> = {};
interface y<T> {}
class z<T> {}

// CEVAP
type Phone<T, K, B, O> = {
  marka: T;
  renk: T;
  fiyat: K;
  isletim_sistemi: T;
  kamera_cozunurluk: K;
  NFC: B;
  ek_ozellikler: O;
};

const Samsung: Phone<string, number, boolean, string[]> = {
  marka: "Samsung",
  renk: "Siyah",
  fiyat: 20000,
  isletim_sistemi: "Android",
  kamera_cozunurluk: 128,
  NFC: true,
  ek_ozellikler: ["hızlı şarj"],
};

// CEVAP
type Telefon<T extends string | number | boolean> = {
  marka: T;
  model: T;
  sarj: boolean;
  yil: number;
};

let phone: Telefon<string> = {
  marka: "samsung",
  model: "s23",
  sarj: true,
  yil: 2023,
};
