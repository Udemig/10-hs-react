/*
 * Readonly - Salt okunur

 * Typescript'de bir sınıfın veya nesnenin içerisindeki bir özelliğin sadece okunabilir yapmaya yarar.

 * Readonly ile tanımladığımız bir özelliğe değer ataması

 * sınıflarda sadece constructor içiresinde yapabiliriz.

 * nesnelerde ise özelliği tanımlarken yapabiliriz.
*/

type Person = {
  name: string;
  surname: string;
  readonly tc_no: number;
};

const kisi: Person = {
  name: "Mahmut",
  surname: "Yanık",
  tc_no: 50519456754,
};

kisi.name = "Fırat";
// kisi.tc_no = 56547567; // readonly bir ifade olduğu için değiştirilemez

class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string = "Orhan Pamuk";

  constructor(yeni_isim: string, yeni_sayfa: number, yeni_yazar: string) {
    this.isim = yeni_isim;
    this.sayfa = yeni_sayfa;
    this.yazar = yeni_yazar;
  }
}

const kitap = new Kitap("Hobit", 500, "Tolkien");

console.log(kitap);
kitap.isim = "Hobbit 4";
// kitap.yazar = "Deneme"; // readonly olduğu için constructor dışarısında değiştirilemez
console.log(kitap);

// SORU:
// Readonly bir propertye sahip ve değişkenleri tanımlarken erişim belirteçleri kullandığınız en az 4 özelliğe sahip bir class yazınız ve class'tan örnek oluşturunuz

// Cevap
class Sinif {
  public isim: string;
  protected sayisi: number;
  public readonly yazar: string = "Rifat Ilgaz";

  constructor(yeni_isim: string, yeni_sayfa: number, yeni_yazar: string) {
    this.isim = yeni_isim;
    this.sayisi = yeni_sayfa;
    this.yazar = yeni_yazar;
  }
}

const sinif = new Sinif("Hababam", 1905, "Ömer Seyfettin");
console.log(sinif);
sinif.isim = "Hababam snifta Kaldi";

// cevap
class Car {
  public name: string;
  protected color: string;
  private readonly piece: number;
  public price: number;

  constructor(
    new_name: string,
    new_color: string,
    new_piece: number,
    new_price: number
  ) {
    this.name = new_name;
    this.color = new_color;
    this.piece = new_piece;
    this.price = new_price;
  }
}

const car1 = new Car("Audi", "black", 8, 5000000);
console.log(car1);
car1.name = "Bmw";
console.log(car1);

// cevap
class Personel {
  public ad: string;
  public soyad: string;
  private readonly tc_no: number;
  protected girisYili: number;

  constructor(
    y_ad: string,
    y_soyad: string,
    y_tc_no: number,
    y_girisYili: number
  ) {
    this.ad = y_ad;
    this.soyad = y_soyad;
    this.tc_no = y_tc_no;
    this.girisYili = y_girisYili;
  }
}

const personel = new Personel("ali", "Yilmaz", 1236445772, 2020);
console.log(personel);

// cevap
class Film {
  public isim: string;
  protected yayın_tarihi: number;
  public readonly yönetmen: string = "Peter";

  constructor(
    yeni_isim: string,
    yeni_yayın_tarihi: number,
    yeni_yönetmen: string
  ) {
    this.isim = yeni_isim;
    this.yayın_tarihi = yeni_yayın_tarihi;
    this.yönetmen = yeni_yönetmen;
  }
}

const Film2 = new Film("HObit beklenmedik yolculuk", 2012, "peter jackdon");
console.log(Film2);
Film2.isim = "Hobit beklenmedik yolculuk";

// cevap
class PC {
  public Marka: string;
  public ekran_karti: string | number;
  protected cikis_yili: number;
  private readonly dolar_kuru: number;

  constructor(
    marka: string,
    ekran_karti: string | number,
    cikis_yili: number,
    dolar_kuru: number
  ) {
    this.Marka = marka;
    this.ekran_karti = ekran_karti;
    this.cikis_yili = cikis_yili;
    this.dolar_kuru = dolar_kuru;
  }

  birimCevir(miktar: number): number {
    return miktar * this.dolar_kuru;
  }
}
const MSI = new PC("MSI", "RTX 4060", 2024, 32.7);
console.log(MSI);
