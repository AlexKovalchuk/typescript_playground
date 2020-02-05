var sorting = [5, 3, 1, 4, 6];
var bubbleSort = function (inputArr) {
    var len = inputArr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                var tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
var result = bubbleSort(sorting);
console.log(result);
//# sourceMappingURL=index.js.map