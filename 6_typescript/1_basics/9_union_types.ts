/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin tiplerinin alabileceği birden fazla farklı türde veri varsa kullanılır.
 
 * Örn: Bir kullanıcı değişkeni var ama kullanıcı adı(string) mi yoksa id(number) si mi gelicek kesin olarak belli değil bu noktada değişken tipini kesin olarak string veya kesin olarak number demek mümkün olmaz ve bizde union types ile stirng veya number deriz 
*/

let user: string | number;

user = "Ali";

user = 468245;

// ÖRN: Bir telefonun verisini tutucaz ama ios telefonun değişken isimleri ile android'in farklı olusun
type IOS = {
  ios_version: number;
  airdrop_version: number;
  device: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: IOS | Android;

phone = {
  ios_version: 13.0,
  airdrop_version: 3.5,
  device: "Iphone 15",
};

phone = {
  android_version: "Marshmellow",
  google_play_version: 19.7,
  device: "Samsung Note *",
};

// NOT: Union Types ile

type AType = { key1: string; key2: string };

type BType = { key3: number; key4: number };

// example değişkeni a veya b tipinde olsun dedik ve:
let example: AType | BType;

// ya a tipinin bütün değerlerini
example = { key1: "x", key2: "x" };

// ya b tipinin bütün değerlerini
example = { key3: 45, key4: 45 };

// yada hem a hemde b tipinin bütün değerlerini tanımlayabiliriz
example = { key1: "x", key2: "x", key3: 45, key4: 45 };
