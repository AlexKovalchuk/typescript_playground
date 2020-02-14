console.log('helper.js');

export const generateRandomValue = (min: number = 100, max: number = 999) : number => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const changeRowAmount = (matrix: Array<Array<number>>, M: number, N: number, isAdd: boolean): Array<Array<number>> => {
  if(!isAdd) {
    matrix.pop();
    return matrix;
  }
  let newRow = [];
  for (let i = 0; i < N; i++) {
    const squareObject = {
      id:`${M}${i}`,
      amount: generateRandomValue(100, 999),
    };
    newRow.push(squareObject);
  }
  matrix.push(newRow);
  return matrix;
}

export const calculatePercentageMatrixSums = (matrix: Array<Array<object>>, sumArr: Array<any>): Array<object> => {
  const resultSumArray = [];
  matrix.forEach((row, rowIndex) => {
    let tmpPercentageArr = [];
    row.forEach((el: any) => {
      if(sumArr[rowIndex]) tmpPercentageArr.push({amount: (el.amount * 100 / sumArr[rowIndex].amount).toFixed(2)})
    });
    resultSumArray.push(tmpPercentageArr);
  });
  return resultSumArray;
};

export const calculatePercentageSums = (matrixRow: Array<number>, sum: number): object => {
  const zero = 0;
  return matrixRow.map((el: any) => {
    if(sum === 0) return zero.toFixed(2);
    return {
      amount: (el.amount * 100 / sum).toFixed(2)
    }
  })
};
