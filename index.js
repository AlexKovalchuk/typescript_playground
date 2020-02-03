var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(['one', 'two']);
// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]
var tuple = [7, "hello", true];
console.log('tuple', tuple);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log('a', a);
console.log('passthrough', passthrough);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, b);
}
keepWholeObject({ a: 'str', b: 7 });
function f1(_a) {
    var a = _a.a, b = _a.b;
    // ...сщты
    console.log(a, b);
}
f1({ a: 'str2', b: 8 });
function f2(_a) {
    var _b = _a === void 0 ? { a: "astr" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
    console.log('f2', a, b);
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to { a: "" }, which then defaults b = 0
// f2({}); // error, 'a' is required if you supply an argument
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArrays([0], first, second, [5]);
console.log(bothPlus);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(search);
var Cl = /** @class */ (function () {
    function Cl() {
        var _this = this;
        this.p = 12;
        this.m = function () {
            console.log('mmmm', _this.p);
        };
    }
    Cl.prototype.n = function () {
        console.log('nnnn', this.p);
    };
    return Cl;
}());
var cl = new Cl();
var clone = __assign({}, cl);
clone.p; // ok
clone.m(); // error!
cl.n(); // error!
console.log('Cl', cl);
console.log('cl', cl.n);
console.log('clone', clone);
for (var key in cl) {
    if (cl.hasOwnProperty(key)) {
        var element = cl[key];
        console.log('key', key, element);
    }
}
//# sourceMappingURL=index.js.map