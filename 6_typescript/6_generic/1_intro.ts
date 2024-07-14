/*
 ! Generic:
 * Bir fonksiyon'un, type'ın , class'ın veya interface'in içerisindeki bazı türlerin dinamik olarak değişebilmesini sağlayan yapıdır.

 * Bir fonksiyon içerisinde generic nasıl tanımlanır ?
 
 - Bir generic her türü değer olarak alabilir (kendi oluştuduklarımız dahil)
 - Generic type'lar tanımlandığı fonksiyonun içerisnde her yerde kullanılabilir.
 - Generic tipi fonksiyonlarda fonksiyonun isminin bitişine ve parametre kısmının başlangıcı arasına "<>" ile tanımlarız
 - Bir fonksiyonda istendilidği kadar generic tip tanımlanabilir.

*/

// Generic itp olmadan rastgele değer getiren fonksiyon yazalım
const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomNumber([10, 20, 30, 40, 50, 60]));

// projenin üzeirnden 2 gün geçti bu sefer aynı fonksiyonun string bir dizi alıp string bir değer döndüren verisyonuna ihtiyaç duydunuz ve bunu yapmanın tek yolu yeni bir fonksiyon yazmak
const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomString(["selam", "naber", "nasılsın", "iyimisin"]));

// generic ile sorunu çözelim
const getRandomEle = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandomEle<string>(["a", "b", "c"]);

getRandomEle<number>([1, 2, 3, 4]);

getRandomEle<boolean>([true, false, true, false]);

/*
 * normalde generic tip alan fonksiyona parametre gönderdiğimiz anda o parametrenin tipini generic oalrak göndeririz ama bu bazı beklenemedik sonuçlar oluşturabiliceğinden her zaman kendimizin göndermesi daha sağlıklı
 */

getRandomEle(["a", "b", "1"]);
