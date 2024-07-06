/*
 * Type Aliases | Custom Type
 * Şu ana kadar tip ataması yaparken js'de var olan temel tiplere ekstra olarak bir iki tanae tip kullandık.
 * Gerçek projelerde o anki yaptığımız işe özel spesifik veri tiplerine ihtiyaç duyabiliyoeuz.
 
 * Bunları tanımlamak için type anaktar kelimesi kullanıyoruz.

 * Neden ihityacımız var?
 * Çümkü belirlediğimiz type projenin bir çok alnında sayfasında kullanılması gerekebilir. Bu noktada custom type kullanılarak kopyala yapıiıtın ve kod tekrarının önüne geçmiş oluruz
*/

// örnek - 1
type char = string;

let isim: char = "zeki";

// örnek - 2 aynı union type'ı projede defalarca kullanmak istedik
let foo: string | number | boolean = "merhaba";
let bar: string | number | boolean = 35;
let baz: string | number | boolean = true;

// yukarıdaki kod tekrarının çözümü type 'tan geçer
export type SNBType = string | number | boolean;

let foo1: SNBType = "merhaba";
let bar1: SNBType = 35;
let baz1: SNBType = true;
