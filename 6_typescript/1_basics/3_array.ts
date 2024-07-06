/*
 * Array Type:

 * Typescriptde diizleirn tipini tanımlarken sadece bu dizi olucak demeyiz o dizinin içerisndeki elemanlarında tipini ifade etmek zorundayız

 * Tanım
 * tip[] > string[] > number[]
 */

// Örnek - 1
const users: string[] = ["Gül", "Fatma", "Ali"];

// bu tip tanımı sadece değişkene değer ataması yaparken değil bütün dizi methodlarındada devreye girer.

users.push("ahmet");

// users.push(34) HATA

// Örnek - 2
const prices: number[] = [45, 67, 79, 3, 4, 79, 23];

// Örnek - 3
const dizi: boolean[] = [true, false, false, true];

// Örnek - 4
const cars: object[] = [{ name: "BMW" }, { name: "Mercedes" }];

/*
 * Soru: Bir dizi içerisnde birden fazla farklı tipte veri olmasını istiyorsak ne yaparız?

 * Cevap: Normalde bir dizide tek türde veri olması beklenir.
 * Bazı durumlarda birden fazla tipte veri alan diziler olabilir.
 * Union Type kullanarak bu sorun çözeriz.
 * "Union Types - Birleşik Tipler"
 * string | number > string yada number olabilir
*/

// tip: öğretmenler dizisi string veya null değerlerden oluşur

let teachers: (string | null)[] = ["Uğur", "Ahmet", null];
