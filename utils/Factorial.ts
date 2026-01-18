export const Factorial = ( num: number) => {
   let factorial = 1 
   for (let i = 1; i <= num; i++) {
      factorial *= i   
   }
   return factorial;
}

export const factorialResursive = (num: number): number => {
   if (num === 0 ) return 1
   return num * factorialResursive(num - 1);
}


export const factorailWhile = (num:number):bigint =>  {
   let sum = 1n;
   let i = 1n
   while(i <= BigInt(num)) {
      sum *= i;
      i++;
   }
   return sum;
}

