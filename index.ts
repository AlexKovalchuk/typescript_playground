
let sorting: Array<number> = [5,3,1,4,6];
let bubbleSort = (inputArr: Array<Number>) => {
  let len: number = inputArr.length;
  let swapped: boolean;
  do {
      swapped = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp;
              swapped = true;
          }
      }
  } while (swapped);
  return inputArr;
};

const result = bubbleSort(sorting);
console.log(result);
