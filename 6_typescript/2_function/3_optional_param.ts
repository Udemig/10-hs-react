/*
 * Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz parametrelerinin tamamına değer gödnermemiz gerekli
 
 * Bazı durumlarda bazı parametreler zorunlu olmayabilir. Bu durumlarda opsiyonel parametreler kullanılır.

 * Tanım
 * (a?:string,b?:number) => string : b parametresi opsiyonel olur
 
 * Eğer opsiyonel olan parametreyi göndermezsek undefined değeri gider.
 * Opsiyonel parametreler, parametre listesinin en sonunda yer alır.
 * Opsiyonel bir parametrenin ardından zorunlu bir parametre gönderilemez

*/

function exaFunc(par1: number, par2: string, par3?: boolean) {
  console.log("1.parametre", typeof par1);
  console.log("2.parametre", typeof par2);
  if (par3) {
    console.log("3.parametre", typeof par3);
  }
  console.log("------------------------");
}

exaFunc(34, "selam", true);
exaFunc(34, "selam", undefined);
exaFunc(34, "selam");

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman}, ${isim}`;
  } else {
    return `Merhaba, ${isim}`;
  }
};

console.log(karsilama("Ahmet", "akşamlar"));
console.log(karsilama("Ali"));
