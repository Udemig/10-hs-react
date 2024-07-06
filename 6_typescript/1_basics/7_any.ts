/*
 * Any Type:
 * Bir değişkene any type atadığımız zaman herhangi bir tür kısıtlamaya maruz kalmaz.
  
 * TS'de any type ile tanımlanmış bir değişken JS'de tanımlanmış bir değişken ile aynı davranı. Yani her tipte veri alabilir.

 * Normal şartlarda any kullanaılması ts mantığına aykırıdır. 
 * Sadece "geçici / acil" durumlarda kullanılır ve daha sonra bütün any tipleri olması gereken tiplere çevrilir.
*/

let foo: any;

foo = {};

foo = "merhaba";

foo = 35;

foo = () => {};

// Soru: Bir dizi içerisnde veya tuple'larda kullanıabilir mi?

// Cevap: Evet, Tip atamasnın yapıdlığı her yerde kullanılır

let rgb: [string, number, any];

let herhangi: any[] = [123, "merhaba", true, {}, [], () => {}];
