export const EvenNumber = (StartNum: number, EndNum: number) => {
   for (let i = StartNum; i <= EndNum; i++) {
      if (i % 2 === 0) {
         console.log("Even NO:-", i)
      }
   }
}

export const PrintEvenNumber = (EndNum: number) => {
   for (let i = 2; i <= EndNum; i += 2) {
      console.log("Even NO:-", i)
   }
}

