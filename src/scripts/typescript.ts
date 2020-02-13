console.log('hello typescript');
interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();


let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;
console.log('x', x);

function greet(n: Named) {
  console.log("Hello, " + n.name);
}

function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
  callback(...args)
}

invokeLater([1, 2], (x, y) => console.log(x + " && " + y));
invokeLater([1], (x?, y?) => console.log(x + " && " + y));
class Animal {
  feet: number;
  name: string;
  constructor(name: string, numFeet: number) {
    this.name = name;
    this.feet = numFeet;
  }
}

class Size {
  feet: number;
  constructor(numFeet: number) { }
}

let a: Animal = new Animal('Oscar', 4);
let s: Size;
console.log(a, s);


