export const PrintNumberWithForLoop = (startNum: number, endNum: number) => {
  for (let i = startNum; i <= endNum; i++) {
    console.log("Count:", i);
  }

  let i = startNum;
  while (i <= endNum) {
    console.log("count:-", i);
    i++;
  }
};

export const PrintNumberWithForWhileLoop = (
  startNum: number,
  endNum: number
) => {
  let i = startNum;
  while (i <= endNum) {
    console.log("count:-", i);
    i++;
  }
};

export const PrintNumberWithForDoWhileLoop = (
  startNum: number,
  endNum: number
) => {
  let i = startNum;
  do {
    console.log("count:-", i);
    i++;
  } while (i <= endNum);
};

export const PrintNumWithRecursion = (StartNum: number, EndNum: number) => {
  if (StartNum > EndNum) return;
  console.log("count:-", StartNum);
  PrintNumWithRecursion(StartNum + 1, EndNum);
};
