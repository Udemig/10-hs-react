/*
 * Typescriptde bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken parametlerin sağında tiplerini girerek tanımlayabiliriz ama bazı durumlarda fonksiyoların bapımsız bir şekilde tipinin tanımlı olması onu bir çok yerde kullanabilir yapar ve kod tekrarından kurtuluruz.
 */

// 1.Yol: Fonksiyon Üzerindeki Tanım
let func1 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı";
};

let func2 = (par1: string, par2: number): string => {
  return "Nabers";
};

// 2.Yol: Ayrı Tip Tanımı
type FuncType = (par1: string, par2: number) => string;

let func3: FuncType = (par1, par2) => {
  return "Fonksiyondan Selam";
};

// Örnek

type weatherFunc = (konum: string, derece: number) => string;

const func: weatherFunc = (konum, derece) =>
  `Merhaba, ${konum} konumundaki hava sıcaklığı ${derece} derecedir.`;

const text = func("İstanbul", 34);

console.log(text);
