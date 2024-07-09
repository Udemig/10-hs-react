/*
 * void: bir fonksiyonun bir şey döndürmediğini ifade etmek için kullanılır

 * void varsa return satırı sadece fonksiyonu durdurma amacıyla kullanılır yani değer döndürmez
*/

function selamla(): void {
  console.log("selam, nasılsın");

  return;
}

/*
 * Never: hata üreten fonksiyonlarda kullanılır.
 * Örneğin bir fonksiyon sürekli olarak hata fırlatması durumu.
 * "Hüç bir zaman bu noktaya ulaşılamaz" durumu.
 */

function hataFonksiyonu(message: string): never {
  throw new Error(message);

  console.log("selam");
}

try {
  hataFonksiyonu("404 not found");
} catch (err) {
  console.log("Fonksiyon görevini tamamlayamdan hata fırlattı", err);
}

/*
 Sonuç olarak
 * fonksiyonun return tipi
 * any ise herhangi bir türde veri döndürebilir
 * void ise hiç bir değer döndüremez
 * never ise bir hata fırlatır yani return satırı asla çalışmazs
*/
