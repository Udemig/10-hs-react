/*
 * Tuple Types
 * Typescript ile birlikte hayatımıza giren bir tiptir.
 
 * Kullanım Koşulları:
 * * Dizinin uzunluğu sabit olmalı.
 * * Dizideki elemanların sırası değişmemeli.
  
 * Kullanım:
 * Örn: [number,string,object]
 */

// Örnek - 1
const ders1: [string, number] = ["Fizik", 86];

// Örnek - 2
// Bir renk geçişi için veri tipi tanımlayalım.
const gradient: [string, number, number] = ["to right", 357683, 7532222];

// Örnek - 3
// Bir css rgb/rgba renginin değerlerini dizi içerisinde tutalım.
// rgb(123,56,67)
// rgba(123,56,67,0.8)

let color: [number, number, number, number?];

color = [123, 56, 78];

color = [123, 56, 78, 0.4];

// Soru: Birden fazla opsiyonel değer olabilir mi?

// Cevap: Evet ama bir kural var, opsiyonel değerlerin hepsi en sonda yer almalı

let date: [number, (string | number)?, number?];

date = [10, "Ocak", 1999];

date = [10, "Ocak"];

date = [10];

date = [10, undefined, 1999];

// Gerçek Projede

// const [state, setState]:[string, function] = useState("");
