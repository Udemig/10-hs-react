/*
 * Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.
  
 * Özellikler
 * Bir parametreyi rest param haline getirmek için "..." kullanırız.
 * Bir rest paramın ardından herhangi bir fakrlı parametre yazılamaz (sebebi rest paramın kaç tane değer alıcağının belli olmaması) 
  
 * Rest parametre gönderilen değerleri en son diziye çevirir. 
*/

function toplam(metin: string, ...sayilar: number[]): string {
  return metin + sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(toplam("Sonuç: ", 10, 29, 45, 79, 1, 4, 7, 10));
console.log(toplam("Sonuç: ", 10, 20));
console.log(toplam("Sonuç: ", 5, 78, 9, 3, 5, 7, 9, 43, 78, 7, 46, 4));

// Not: Rest param ile Spread opetör birbirinden alakasızdır.
const state = {
  name: "ahmet",
  age: 45,
};

const yeni = {
  ...state, // bu rest param değil bir spread opetördür
  licence: true,
};

console.log(yeni);

// Örnek
// Sınıftaki öğrenceileri alıp yoklamasını yapan her öğrenci için "Ali Burda" şeklinde loglayan bir fonksiyon yazalım

const yoklama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " öğretmen yoklama alıyor");
  console.log("-------------------------");
  students.forEach((student) => console.log(student + " burda!"));
};

yoklama("Ayla", "Ayşe", "Fatma", "Hamza", "Burak", "Ali", "Ersin");

/* 
   ! Challange
   * İstenildiği kadar sayı değeri gönderilebilen bir fonksiyon yazın.
   * Aldığı ilk 2 parametreyi toplasın
   * İlk 2 parametre dışında kalan diğer bütün parametreleri çarpsın
   * toplam ve çarpımı bir nesne içerisinde döndürsün.
   
   * hesapla(10,20,4,5,2) 

   * {toplam:30,carpim:40}
*/

// İLK CEVAP
const hesapla = (...sayılar: number[]) => {
  let toplam = sayılar[0] + sayılar[1];
  let carpım = sayılar.slice(2).reduce((total, current) => total * current, 1);
  return { toplam: toplam, çarpım: carpım };
};

console.log(hesapla(10, 20, 4, 5, 2));

// 2. CEVAP
function hesap(sayi1: number, sayi2: number, ...sayilar: number[]) {
  let toplam = sayi1 + sayi2;
  const carpim = sayilar.reduce((a, b) => a * b, 1);
  return { toplam, carpim };
}

console.log(hesapla(10, 20, 4, 5, 2));
