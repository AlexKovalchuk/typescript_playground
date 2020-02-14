export const hello = () => {
  return 'Hello world!'
}

export const digPow = (n: number, p: number) => {
  // your code
  let sum = 0;
  let nStrArr = n.toString().split('');
  nStrArr.forEach((strNum, index) => {
    const num = Number.parseInt(strNum);
    const pow = index+p;
    sum += Math.pow(num, pow);
  });
  let result = sum/n;

  return Number.isInteger(result) ? result : -1
}

export const squareDigits = (num: number): number => {
  // may the code be with you
  const pow = 2;
  let result = '';
  num.toString().split('').forEach(number => result += Math.pow(Number.parseInt(number), 2))
  return Number.parseInt(result);
};

console.log(squareDigits(9119));

