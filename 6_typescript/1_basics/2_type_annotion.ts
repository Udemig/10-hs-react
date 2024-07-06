/*
 * Type Annotion
 * Javascript'de değişkenin türünü belirleme gibi bir özellik söz konusu değil.
 * Fakat Typescript'de tanımladığımız değişkenlerin tiplerinide belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamaasının dışarısına çıkamıyoruz.
 * Bu durumda kodda oluşabilecek hataların erkenden önüne geçiyoruz.
 */

let foo: number;

// foo = "seksen"; HATA

// foo = true; HATA

// foo = {};  HATA

foo = 99;

const bar: number = 50;

/*
 * Javascript Veri Tipleri
 * string
 * number
 * boolean
 * object
 * undefined
 * null
 * array
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 *
 * bu veri tiplerini type annotion ile kullanbiliryoruz
 */

let project: string = "Event App";

var age: number = 45;

let licence: boolean = true;

let student: object = {
  id: 2,
  name: "Ali",
};

const baz: null = null;

let bam: undefined = undefined;

let ban: undefined;
