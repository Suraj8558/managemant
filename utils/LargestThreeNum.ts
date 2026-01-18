export const LargestThreeNum = (num1: number, num2: number, num3: number): number => {
   let largestNum = num1;
   if (largestNum < num2) {
      largestNum = num2
   }
   if (largestNum < num3) {
      largestNum = num3
   }
   return largestNum;
}



