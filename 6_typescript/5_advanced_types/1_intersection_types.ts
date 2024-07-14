/*
 * Intersection Types - Kesişim Türler
 * Typescriptde kesişim türler iki veya daha fazla türü birleştirmek için kullanılır.
 */

type typeA = { key1: string };
type typeB = { key2: number };

// 1) Intersection: Her iki tipinde bütün özellikleri miras alınır
type typeAB = typeA & typeB;

let foo: typeAB = {
  key1: "merhaba",
  key2: 47,
};

// 2 Union: Belirlenen türlerin en az birinin bütün özellikleri tanımlanmalı.
// İsteğe bağlı her iki tipin bütün özellikleri tanımlanabilir
type typeAorB = typeA | typeB;

let bar = { key1: "naber" };
let baz = { key2: 56 };
let ban = { key1: "selam", key2: 67 };

// Örnek
type BusinessPartner = {
  name: string;
  credit: number;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = Identity & BusinessPartner;

let e1: Employee = {
  id: 123,
  name: "John",
  email: "john@gmail.com",
  phone: "905465546456",
};

let e2: Customer = {
  id: 4576,
  name: "Foo",
  credit: 109999,
};

// isterseki 2 den fazla türü kesişim yapabiliriz
type NewEmployee = Identity & BusinessPartner & Contact;
