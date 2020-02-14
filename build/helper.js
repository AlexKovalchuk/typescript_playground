"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('helper.js');
exports.generateRandomValue = (min = 100, max = 999) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.changeRowAmount = (matrix, M, N, isAdd) => {
    if (!isAdd) {
        matrix.pop();
        return matrix;
    }
    let newRow = [];
    for (let i = 0; i < N; i++) {
        const squareObject = {
            id: `${M}${i}`,
            amount: exports.generateRandomValue(100, 999),
        };
        newRow.push(squareObject);
    }
    matrix.push(newRow);
    return matrix;
};
exports.calculatePercentageMatrixSums = (matrix, sumArr) => {
    const resultSumArray = [];
    matrix.forEach((row, rowIndex) => {
        let tmpPercentageArr = [];
        row.forEach((el) => {
            if (sumArr[rowIndex])
                tmpPercentageArr.push({ amount: (el.amount * 100 / sumArr[rowIndex].amount).toFixed(2) });
        });
        resultSumArray.push(tmpPercentageArr);
    });
    return resultSumArray;
};
exports.calculatePercentageSums = (matrixRow, sum) => {
    const zero = 0;
    return matrixRow.map((el) => {
        if (sum === 0)
            return zero.toFixed(2);
        return {
            amount: (el.amount * 100 / sum).toFixed(2)
        };
    });
};
//# sourceMappingURL=helper.js.map