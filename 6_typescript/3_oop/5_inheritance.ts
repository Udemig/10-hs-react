/*
  * Inheritance (Kalıtım Miras):

  * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanılabilirliğini artırır ve kod organizasyonunu geliştirir. Miras her zaman "ana sınıf | üst sınıf" tan türetilmiş olan alt sınıflar arasında geçekleşir

 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alabilir
*/

// Parent Class
class GeometrikSekil {
  public ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir.`);
  }
}

// Derived Class - Constructor Yok
class Dikdortgen extends GeometrikSekil {
  private uzunluk: number = 40;
  private genislik: number = 80;
}

const sekil1 = new Dikdortgen("Dikdörtgen");

// Derived Class - Constructor Var
class Daire extends GeometrikSekil {
  private yaricap: number = 4;

  constructor(ad: string, yaricap: number) {
    // miras aldığımız GeometrikSekil class'ının constructor'ına değer göndermeye yarar
    super(ad);
    this.yaricap = yaricap;
  }
}

const sekil2 = new Daire("Daire", 10);

/*
 * Child class'ta constructor tanımlandı ise new ile örnek oluşturuken Parent class'ın constructor'ına değer göndermek zorundayız.

 * Eper child class'da constructor varsa mutlaka super methodu ile parent'ın constructur'ına değer gönderilmelis
 */

// Parent:
class Arac {
  public marka: string;
  public model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor..");
  }
}

// Child
type Fuel = "benzin" | "dizel" | "elektrik";

class Araba extends Arac {
  // miras alınan class'a yeni değişkenler ekle:
  private yakit: Fuel;

  constructor(marka: string, model: string, yakit: Fuel) {
    super(marka, model); // parent class'In constructor'ına değer göndermeye
    this.yakit = yakit;
  }

  // miras alınan class'a yeni özellikler ekle
  vitesDegis(aritackMi: boolean) {
    console.log(aritackMi ? "Vites arttırılıyor.." : "Vites düşürülüyor..");
  }

  // miras olarak alınan metodu değiştirme > method overriding
  calistir(): void {
    super.calistir(); // parent class'ın içerisndeki calistir fonksiyonunu tetikler
    console.log("Kontak Çevriliyor...");
    console.log("Gaz Veriliyor...");
  }
}

const porsche = new Araba("Porsche", "911", "benzin");
porsche.calistir();

// Bir class aynı anda iki farklı class'ı miras alamaz ama miras alma olayı birden fazla kere gerçekleşebilir
class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color: string = "Kahverengi";
}

class Mother extends Human {
  eye_color: string = "Mavi";
}

class Son extends Father {}

const son = new Son();
console.log(son.eye_color); // Kahverengi
