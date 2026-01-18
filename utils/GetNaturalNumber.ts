export const GetNaturalNumber = (NaturalNum: number): number => {
  let sum: number = 0;
  for (let i = 0; i <= NaturalNum; i++) {
    sum += i
  }
  return sum;
}
export const getNaturalNumberSum = (n: number): number => {
  return n * (n + 1) / 2
} 