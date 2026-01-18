export const PrintOddNumber = (EndNumber:number) => {
  const result: number[] = []
  for(let i= 0; i <= EndNumber; i++) {
    if(i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

export const PrintOddNumberSimple = (EndNumber: number) => {
  const result: number[]= []
  for (let i = 1; i <= EndNumber; i +=2) {
    result.push(i);
  }
  return result;
}