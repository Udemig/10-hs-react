// Bir türü tanımlarken generic kullanıp oluşturuduğumuz türün yeniden kullanılabilir olmasını sağlayabiliriz.

type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (i: number) => T;
};

const arr: ArrayType<number | string> = {
  items: [1, 2, 3, 4, "5", "6"],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

// Bir yapı birden fazla generic tip alabilir
interface IPerson<T, Z> {
  name: T;
  age: Z;
}

const foo: IPerson<string, number> = {
  name: "ali",
  age: 123,
};

// T , R , Z , E: Error Hata Tipi , V: Value - Değer Tipi
