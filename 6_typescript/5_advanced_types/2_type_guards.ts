/*
 ! Type Guards

 * Type guardsın amacı belirli bir türdeki değeri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kulanılan bir tekniktir.

 * 2 yaygın typeGuard yöntemi bulunur (typeOf, instanceOf)
*/

// 1) typeOf operatörü ile typeGuard tekniğini uygulayalım
function log(input: string | number): void {
  if (typeof input === "string") {
    console.log("Girilen değer bir metindir: ", input);
  } else {
    console.log("Girilen değer bir sayıdır: ", input);
  }
}

log("selam|");
log(343);

// instanceOf operatörü nedir ?
class Rabbit {}
class Bird {}

const tavsan = new Rabbit();

console.log(
  "Tavşan nesnesi Rabbit class'ının örneğidir?",
  tavsan instanceof Rabbit
);
console.log(
  "Tavşan nesnesi Bird class'ının örneğidir?",
  tavsan instanceof Bird
);

// 2) instanceOf operatörü ile typeGuard tekniği uygulayalım
class Cat {
  meow(): void {
    console.log("🐈🐈 miyav miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶 hav hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
