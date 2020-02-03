console.log("Hello")
// function f(condition, x) {
//   if (condition) {
//       let x = 100;
//       return x;
//   }

//   return x;
// }

// console.log(f(false, 0)); // returns '0'
// console.log(f(true, 0)); // returns '100'

// let input = [1, 2];
// let [first, second] = input;
// console.log(first); // outputs 1
// console.log(second); // outputs 2

function f([first, second]: [string, string]) {
  console.log(first);
  console.log(second);
}
f(['one', 'two']);

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]

let tuple: [number, string, boolean] = [7, "hello", true];
console.log('tuple', tuple)
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
console.log('a', a);
console.log('passthrough', passthrough);

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log(a, b);
}

type C = { a: string, b?: number }

keepWholeObject({a:'str', b:7})
function f1({ a, b }: C): void {
  // ...сщты
  console.log(a,b)
}
f1({a:'str2', b:8})

function f2({ a, b = 0 } = { a: "astr" }): void {
  // ...
  console.log('f2', a, b)
}

f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to { a: "" }, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument


let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);

class Cl {
  p = 12;
  m = () => {
    console.log('mmmm', this.p);
  };
  n() {
    console.log('nnnn', this.p);
  }
}
let cl = new Cl();
let clone = { ...cl };
clone.p; // ok
clone.m(); // error!
cl.n(); // error!
console.log('Cl',cl)
console.log('cl',cl.n)
console.log('clone',clone)
for (const key in cl) {
  const element = cl[key];
    console.log('key', key, element)
  if (cl.hasOwnProperty(key)) {
    const element = cl[key];
    console.log('key', key, element)
  }
}