"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = () => {
    return 'Hello world!';
};
exports.digPow = (n, p) => {
    let sum = 0;
    let nStrArr = n.toString().split('');
    nStrArr.forEach((strNum, index) => {
        const num = Number.parseInt(strNum);
        const pow = index + p;
        sum += Math.pow(num, pow);
    });
    let result = sum / n;
    return Number.isInteger(result) ? result : -1;
};
exports.squareDigits = (num) => {
    const pow = 2;
    let result = '';
    num.toString().split('').forEach(number => result += Math.pow(Number.parseInt(number), 2));
    return Number.parseInt(result);
};
console.log(exports.squareDigits(9119));
//# sourceMappingURL=hello-word.js.map