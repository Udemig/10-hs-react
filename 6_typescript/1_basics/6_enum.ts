/*
 * Enum (Numaralandırma)
 * Belirli Değerler Kümesi
 * 
 * Benzer kategorideki değişkenleri bir arada tutmak için kullanılır.
 
 * Genelde az miktarda farklı değere sahip verilerin gruplandırılması için kullanılır.

 * İsimlendirme 
 * Ebum isimlendirirken değişken isimlendirme kurallarına uyarız.
 * İlk harfi büyük olur
 * Çoğul takısı kullanmayız
 * Months X | Month ✔︎
 * Renkler X | Renk ✔︎
*/

// Örn: Trafik ışığının aşamalarını verisini tutalım

// klasik js:
const renkler = {
  red: 0,
  yellow: 1,
  green: 2,
};

// typescript ile
enum Color {
  red,
  yellow,
  green,
}

let active_light = Color.green;
console.log(active_light); // 2

// light parametresini tipini Color enumuna eşitlediğim için sadece o enum içerisndeki değerleri alıcak
const speak = (light: Color) => {
  switch (light) {
    case Color.red:
      return console.log("Lütfen Durunuz");

    case Color.yellow:
      return console.log("Hazırlanın");

    case Color.green:
      return console.log("İlerleyebilirsiniz");
  }
};

// artık bu fonksiyonu kullanmak için sadece enum içerisndeki değerleri kulalnabiliriz
speak(Color.green); // İlerleyebilirsiniz

// Örnek - 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day1 = Gun.Carsamba;
let day2 = Gun[2];
let day3 = Gun[Gun.Pazar];

console.log(day1); // 2
console.log(day2); // Carsamba
console.log(day3); // Pazar

// Ornek - 3
enum Status {
  set = "Hazırlanıyor",
  travel = "Dağıtıma Çıktı",
  done = "Teslim Edildi",
}

console.log(Status.travel);

// bu fonksiyon sadece status enumunda tanımlı değerleri param olarak alır
const test = (durum: Status) => {};

test(Status.set);
test(Status.travel);
test(Status.done);
