/*
 OOP (Object Orianted Programming) Nesne Yönelimli Programlama, yazılım geliştirmede kullanalan bir yaklaşımdır. Bu yaklaşım yazılımı nesneler ve bu nesneler arasındaki etkileşimler etrafında yapılandırmayı amaçlar.

 OOP'nin temel kavramları şunlardır

 Sınıf (Class)
 Nesne (Object)
 Kalıtım (Inheritance)

 OOP'nin temel amacı ise kodun daha anlaşılır, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır.
 Bu yaklaşım, büyük ve karmaşık projelerde faydalıdır
  */

/*
  Sınıf (Class): Sınıflar nesnelerin şablonudur.Bir sınıf, belirli bir türdeki nesneler için veri ve fonksiyonları tanımlar. Önrneği "Araba" sınıfı bir arabanın sahip olabileceği özellikler (renk,marka,model vb.) ve davranışlarını (hızlanma,fren yapma, vb.) tanımlayabilir
 */

class OldPhone {
  // burası class'ın gövdesi olur.
  // örnek propetyleri tanımlayalım.
  telefon_tipi: "entegre" | "ayrılmış" = "entegre";
  tus_takimi: string = "döner";
  govde: string = "yatay";

  // örnek methodları tanımlayalım
  ahizeAc(): void {
    console.log("ahize açılıyor...");
  }

  numaraCevir(telNum: string) {
    console.log(telNum + " çevriliyor...");
    console.log("telefon çalıyor....");
  }
}

/*
 * Class Kullanımı
 * Bir class'ı tanımlamak bir type veya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak için yani bir class'tan örnek oluşturmak için new anahtar kelimesini kullanırız.
 * New yardımı ile class'ın bir nevi çalışan bir kopyasını oluştururuz.
 
 * Benzetme
 * Class'ları bir fırındaki kalıba benzetebilir.
 * Class aynı özellik ismi ama genelde farklı değerlere sahip nesneler üretmek için kullanılır
 * Fırındada kalıptan çıkan ekmekler gibidir hepsini şekli aynı olsada içeriği farklı olaiblir
 */

const telefon1 = new OldPhone();
const telefon2 = new OldPhone();

// 2.nesnenin değerlerini değiştirelim.
telefon2.tus_takimi = "tuşlu";
telefon2.govde = "dikey";
telefon2.telefon_tipi = "ayrılmış";

telefon1.ahizeAc();
telefon1.numaraCevir("5556667788");
