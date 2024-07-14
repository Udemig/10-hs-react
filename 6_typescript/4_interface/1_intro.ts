/*
 ! Interface
 * Bir nesnenin yapısını ve nesnenin hangi özelliklere ve methodlara sahip olucağını ifade eder.

  ! Custom Type | Abstract Class | Interface
  * Birbirine benzer görevler yapmaktadırlar
  * 3'ününde oortak noktası bir nesnenin tipini tanımlamak için kullanılabilir olması
   
  ? Abstract Class vs Interface
  * Class'lar aynı anda sadece bir class'ı miras alabilir
  * Interface tek seferde birden fazla interface'i miras alabilir.
  
  ? Type vs Interface
  * Type ile birlikte sadece nesnenin değil bir dizi, string literal, tuple vb. tipler de tanımlanbilir
  * Ama interface ile sadece nesne tipi tanımlanabilir
*/

// Type ile Nesne Tipi Tanımla
type PersonType = {
  name: string;
};

const kisi1: PersonType = {
  name: "Ali",
};

// Interface ile Nesne Tipi Tanımlama
interface IPerson {
  name: string;
}

const kisi2: IPerson = {
  name: "Ayşe",
};

// type ile interfaceden farklı olarak nesne dışında tiplerde tanımlayabilirsiniz
type alphanumeric = string | number;
type arrayType = string[];
type gasType = "electric" | "diesel" | "fuel";
type fn = (a: number) => void;

// Örn: ileride oluşturucağımız bir geometrik şekil nesnesinin hangi özellik ve methodlarını tanımladığımızı interface ile yazalım
interface IShape {
  width: number;
  height: number;
  radius?: number;
  calculateArea: () => number | string;
}

// yukarıdaki interface yardımıyla bir nesnenin tipini tanımlayalım
const square: IShape = {
  width: 200,
  height: 200,

  calculateArea() {
    return this.width * this.height;
  },
};

console.log(square.calculateArea());

// farklı nesnenin tipini aynı interface ile tanımlayalım
const circle: IShape = {
  width: 40,
  height: 1,
  radius: 20,

  calculateArea() {
    if (this.radius) {
      return Math.PI * this.radius * this.radius;
    } else {
      return "Lütfen yarıçap tanımlayın";
    }
  },
};

console.log(circle.calculateArea());
