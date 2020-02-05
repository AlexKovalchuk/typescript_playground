var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello");
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
// function f([first, second]: [string, string]) {
//   console.log(first);
//   console.log(second);
// }
// f(['one', 'two']);
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]
// let tuple: [number, string, boolean] = [7, "hello", true];
// console.log('tuple', tuple)
// let o = {
//   a: "foo",
//   b: 12,
//   c: "bar"
// };
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
// console.log('a', a);
// console.log('passthrough', passthrough);
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//   let { a, b = 1001 } = wholeObject;
//   console.log(a, b);
// }
// type C = { a: string, b?: number }
// keepWholeObject({a:'str', b:7})
// function f1({ a, b }: C): void {
//   // ...сщты
//   console.log(a,b)
// }
// f1({a:'str2', b:8})
// function f2({ a, b = 0 } = { a: "astr" }): void {
//   // ...
//   console.log('f2', a, b)
// }
// f2({ a: "yes" }); // ok, default b = 0
// f2(); // ok, default to { a: "" }, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument
// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];
// console.log(bothPlus);
// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };
// console.log(search);
// class Cl {
//   p = 12;
//   m = () => {
//     console.log('mmmm', this.p);
//   };
//   n() {
//     console.log('nnnn', this.p);
//   }
// }
// let cl = new Cl();
// let clone = { ...cl };
// clone.p; // ok
// clone.m(); // error!
// cl.n(); // error!
// console.log('Cl',cl)
// console.log('cl',cl.n)
// console.log('clone',clone)
// for (const key in cl) {
//   const element = cl[key];
//     console.log('key', key, element)
//   if (cl.hasOwnProperty(key)) {
//     const element = cl[key];
//     console.log('key', key, element)
//   }
// }
// interface LabeledValue {
//   label: string;
// }
// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//       newSquare.color = config.color;
//   }
//   if (config.width) {
//       newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let mySquare = createSquare({color: "blue", width: 7});
// console.log('mySquare', mySquare);
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }
// let p1: Point = { x: 10, y: 20 };
// console.log('p1', p1)
// let ar: number[] = [1, 2, 3, 4];
// let aro: ReadonlyArray<number> = ar;
// ar.push(5)
// console.log('ar', ar)
// console.log('aro', aro)
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// function createSquare2(config: SquareConfig): { color: string; area: number } {
//   // ...
//   console.log('config', config)
//   return {
//     color: config.color || 'blue',
//     area: config.width*config.width
//   };
// }
// let mySquare2 = createSquare2({ colour: "red", width: 100 });
// console.log('mySquare', mySquare2);
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }
// let mySquare3 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig);
// console.log('mySquare3', mySquare3);
// let squareOptions = { colour: "red", width: 100 };
// let mySquare4 = createSquare2(squareOptions);
// console.log('mySquare4', mySquare4);
// let squareOptions2 = { colour: "red" };
// let mySquare5 = createSquare2(squareOptions2);
// console.log('mySquare5', mySquare5);
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let result = source.search(subString);
//     console.log('result search', result);
//     return result > -1;
// }
// console.log(mySearch('alexander', 'xan'));
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }
// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//   let result = src.search(sub);
//   return result > -1;
// }
// console.log('mySearch', mySearch('alexander', 'xand'));
// interface StringArray {
//   [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
// let myStr: string = myArray[0];
// console.log(myStr, myArray);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myArray = ["Alice", "Bob"];
//# sourceMappingURL=index.js.map