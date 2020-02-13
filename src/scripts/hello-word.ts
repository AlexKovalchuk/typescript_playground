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