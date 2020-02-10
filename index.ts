console.log('Generics Hello');

// function identity<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// }

// let output = identity<string>(["myString"]);
// console.log(output);

// function identity2<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity2;
// console.log(myIdentity);

// function identity3<T>(arg: T): T {
//   return arg;
// }
// let myIdentity2: {<T>(arg: T): T} = identity3;
// console.log(myIdentity2('hello Alex'));

// interface GenericIdentityFn {
//   <T>(arg: T): T;
// }
// function identity4<T>(arg: T): T {
//   return arg;
// }
// // let myIdentity4: GenericIdentityFn = identity4;

// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;
// myIdentity(123);
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
// console.log(myGenericNumber.add(2, 5));

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "hello";
// stringNumeric.add = function(x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, " test"));

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }

// loggingIdentity('Alex')
// loggingIdentity({length: 10, value: 3});

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// console.log(getProperty(x, "c")); // okay

function create<T>(c: {new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
const lion = createInstance(Lion);  // typechecks!
const bee = createInstance(Bee);   // typechecks!
console.log('lion', lion);
console.log('bee', bee);

