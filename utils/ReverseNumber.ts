export const reverseNumberFor = (num: number): number => {
  let reversed = 0;
  let n = Math.abs(num);

  for (; n > 0; n = Math.floor(n / 10)) {
    reversed = reversed * 10 + (n % 10);
  }

  return num < 0 ? -reversed : reversed;
}


export const reverseNumberString = (num: number): number => {
  const reversed = Math.abs(num)
    .toString()
    .split('')
    .reverse()
    .join('');

  return num < 0 ? -Number(reversed) : Number(reversed);
}


console.log(reverseNumberString(12345678))
console.log(reverseNumberFor(123456))