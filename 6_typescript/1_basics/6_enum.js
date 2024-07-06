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
var renkler = {
    red: 0,
    yellow: 1,
    green: 2,
};
// typescript ile
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var active_light = Color.green;
console.log(active_light); // 2
// light parametresini tipini Color enumuna eşitlediğim için sadece o enum içerisndeki değerleri alıcak
var speak = function (light) {
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
var Gun;
(function (Gun) {
    Gun[Gun["Pazartesi"] = 0] = "Pazartesi";
    Gun[Gun["Sali"] = 1] = "Sali";
    Gun[Gun["Carsamba"] = 2] = "Carsamba";
    Gun[Gun["Persembe"] = 3] = "Persembe";
    Gun[Gun["Cuma"] = 4] = "Cuma";
    Gun[Gun["Cumartesi"] = 5] = "Cumartesi";
    Gun[Gun["Pazar"] = 6] = "Pazar";
})(Gun || (Gun = {}));
var day1 = Gun.Carsamba;
var day2 = Gun[2];
var day3 = Gun[Gun.Pazar];
console.log(day1); // 2
console.log(day2); // Carsamba
console.log(day3); // Pazar
// Ornek - 3
var Status;
(function (Status) {
    Status["set"] = "Haz\u0131rlan\u0131yor";
    Status["travel"] = "Da\u011F\u0131t\u0131ma \u00C7\u0131kt\u0131";
    Status["done"] = "Teslim Edildi";
})(Status || (Status = {}));
console.log(Status.travel);
