/*
 * Default Param (Varsayılan Değere Sahip Parametre)

 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmaısnı istemyeiz bunun yerine varsayılan bir değer sahip olması istenebilir.
*/

function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

/*
 * Soru:
 * Herkes en az 1 zorunlu ve 1 default veya opsiyonel parametreye sahip bir fonksiyon yazsın
 * Ardında fonksiyonu hem parametreyi göndererek hemde parametreyi göndermeden çalıştırın.

 / kdv oranına göre kdv sini hespalayan fonksiyon
 / zam yüzdesini fiyatın üzerine ekleyen
 / indirim yüzdesini fiyattan çıkaran
*/

// * İLK CEVAP
function iskontoHesapla(ürün: string, fiyat?: number) {
  if (fiyat) {
    console.log(`bu ${ürün}'e ${fiyat} üzerinden %25 indirim uygulanmaktadır.`);
  } else {
    console.log(`bu ${ürün}'ün indirimi en fazla %10'dur.`);
  }
}

iskontoHesapla("telefon", 200000);
iskontoHesapla("bisiklet");

// 2. CEVAP
function siparişDetayları(
  ürün: string = "defter",
  miktar: number = 1,
  müşteri?: string
) {
  if (müşteri) {
    console.log(`${miktar} adet ${ürün}. ${müşteri} için hazırlanıyor.. `);
  } else {
    console.log(`${miktar} adet ${ürün} beklemede`);
  }
}

siparişDetayları("defter", 5, "Ali");
siparişDetayları("kalem", 10);
siparişDetayları();

// 3. cevap
function ortalamaHesaplama(sayi1: number, sayi2?: number, sayi3: number = 96) {
  let ortalama = sayi1 + 30 + sayi3;
  console.log(ortalama);
}
ortalamaHesaplama(96);
ortalamaHesaplama(20, 64);
ortalamaHesaplama(60, 70, 35);
