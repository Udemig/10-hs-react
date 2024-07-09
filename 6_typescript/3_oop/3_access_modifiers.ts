/*
 * Access Modifiers - Erişim Belirteçleri

 * Class elemanalrı ile hassas bilgileri tutucağımız zaman bu bilegilerin class'ın dışarısından erişilip erişilmeyeceğini belirtmek isteyebiliriz.

 * Örneğin kredi kartı bilgilerinin tutan bir class olsun bu class'ın tutucağı bilgileri kod içerisnde her yerde kullanabiliyor olmasını önlemek isteyebiliriz.

 * 3 adet erişim belirteci vardır.

 * public: hem class dışarsından hemde class'ı miras alan diğer class'larda erişilebilir.

 * protected: class dışarısında erişilemez ama class'ı miras alan diğer class'larda erişilebilir

 * private: hem class dışarısında erişilemez hemde class'ı miras alan diğer class'larda erişilemez

*/

// PUBLIC

class Arac {
  public marka: string = "Honda";

  tanit() {
    console.log("Bu arabanın markası: ", this.marka); // tanımlandığı class içerisnden erişim
  }
}

class Motor extends Arac {
  calistir() {
    console.log(this.marka + " motoru çalıştı"); // miras alındığı class içerisinden eriştim
  }
}

const honda = new Arac();

console.log(honda.marka); // class'ın dışarısında eriştim

// PROTECTED
class EvcilHayvan {
  protected ad: string = "Boncuk";
}

class Kopek extends EvcilHayvan {
  havla() {
    console.log(this.ad + " havlıyor"); // miras alan class'ta erişildi
  }
}

const kopek = new Kopek();

// kopek.ad // dışarında eirşime kapalı

kopek.havla();

// PRIVATE
class OzelPersonel {
  private isim: string = "Mahmut";

  selamla() {
    console.log("Merhaba " + this.isim);
  }
}

class GumrukPersoneli extends OzelPersonel {
  tanit() {
    //  this.isim; // miras alınan class'larda erişilemez
  }
}

const kisi = new GumrukPersoneli();
// kisi.isim; // class'ın dışarısında erişiliemez

kisi.selamla();

/*
 * Not: Erişim belirteçleri aynı bütün ts'e özel olan kodlarda olduğu gibib kodu derlediğimizde ortadan kalkar. Yani belirteçler sadece geliştirme şamasını daha güvenli hale getirmek için kullanlır proje yayınlandığında bir işlevi olmaz.


 ERİŞİM            DIŞARIDAN           MİRAS ALAN CLASS              TANIMLANDIĞI CLASS

 PUBLIC               💥                        💥                              💥

 PROTECTED                                      💥                              💥

 PRIVATE                                                                        💥   
*/
