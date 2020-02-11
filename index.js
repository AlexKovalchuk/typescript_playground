"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIsogram(str) {
    //...
    var result = true;
    var length = str.length;
    for (var i = 1; i < length; i++) {
        console.log(str[i - 1]);
        console.log(str.slice(i));
        if (str.slice(i).toLowerCase().search(str[i - 1]) >= 0)
            return false;
    }
    return result;
}
console.log('test:', isIsogram('Alex'));
//# sourceMappingURL=index.js.map