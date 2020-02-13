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
//# sourceMappingURL=hello-word.js.map