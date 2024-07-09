/*
 * static kelimesi bir sınıfın örneği olmadan özelliğin doğrudan sınıfa ait olduğu anlmanına gelir.
 * direkt sınıf üzerinden erişilebilen özellik ve methodlar
 */

// Static Method
class Matematik {
  topla(x: number, y: number): number {
    return x + y;
  }

  static carp(a: number, b: number): number {
    return a * b;
  }
}

// statik olan methoda erişme
Matematik.carp(10, 9);

// static olmayan methoda erişme
const math = new Matematik();
math.topla(50, 70);

// Static Değişken
class Ogrenci {
  static ogrenciSayisi: number = 0;
  isim: string;

  constructor(isim: string) {
    this.isim = isim;

    // constructor her çalıştığında yanş her öğrenci oluştuğunda static olan değişkeni 1 arttır
    Ogrenci.ogrenciSayisi++;
  }
}

const o1 = new Ogrenci("Ali");
new Ogrenci("Ayşe");
new Ogrenci("Ayla");
new Ogrenci("Faruk");

console.log(o1); // { isim: 'Ali' }
console.log(Ogrenci.ogrenciSayisi); // 4
