/*
 * Access Modifiers - Erişim Belirteçleri

 * Class elemanalrı ile hassas bilgileri tutucağımız zaman bu bilegilerin class'ın dışarısından erişilip erişilmeyeceğini belirtmek isteyebiliriz.

 * Örneğin kredi kartı bilgilerinin tutan bir class olsun bu class'ın tutucağı bilgileri kod içerisnde her yerde kullanabiliyor olmasını önlemek isteyebiliriz.

 * 3 adet erişim belirteci vardır.

 * public: hem class dışarsından hemde class'ı miras alan diğer class'larda erişilebilir.

 * protected: class dışarısında erişilemez ama class'ı miras alan diğer class'larda erişilebilir

 * private: hem class dışarısında erişilemez hemde class'ı miras alan diğer class'larda erişilemez

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PUBLIC
var Arac = /** @class */ (function () {
    function Arac() {
        this.marka = "Honda";
    }
    Arac.prototype.tanit = function () {
        console.log("Bu arabanın markası: ", this.marka); // tanımlandığı class içerisnden erişim
    };
    return Arac;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motor.prototype.calistir = function () {
        console.log(this.marka + " motoru çalıştı"); // miras alındığı class içerisinden eriştim
    };
    return Motor;
}(Arac));
var honda = new Arac();
console.log(honda.marka); // class'ın dışarısında eriştim
// PROTECTED
var EvcilHayvan = /** @class */ (function () {
    function EvcilHayvan() {
        this.ad = "Boncuk";
    }
    return EvcilHayvan;
}());
var Kopek = /** @class */ (function (_super) {
    __extends(Kopek, _super);
    function Kopek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kopek.prototype.havla = function () {
        console.log(this.ad + " havlıyor"); // miras alan class'ta erişildi
    };
    return Kopek;
}(EvcilHayvan));
var kopek = new Kopek();
// kopek.ad // dışarında eirşime kapalı
kopek.havla();
// PRIVATE
var OzelPersonel = /** @class */ (function () {
    function OzelPersonel() {
        this.isim = "Mahmut";
    }
    OzelPersonel.prototype.selamla = function () {
        console.log("Merhaba " + this.isim);
    };
    return OzelPersonel;
}());
var GumrukPersoneli = /** @class */ (function (_super) {
    __extends(GumrukPersoneli, _super);
    function GumrukPersoneli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GumrukPersoneli.prototype.tanit = function () {
        //  this.isim; // miras alınan class'larda erişilemez
    };
    return GumrukPersoneli;
}(OzelPersonel));
var kisi = new GumrukPersoneli();
// kisi.isim; // class'ın dışarısında erişiliemez
kisi.selamla();
/*
 * Not: Erişim belirteçleri aynı bütün ts'e özel olan kodlarda olduğu gibib kodu derlediğimizde ortadan kalkar. Yani belirteçler sadece geliştirme şamasını daha güvenli hale getirmek için kullanlır proje yayınlandığında bir işlevi olmaz.

*/
