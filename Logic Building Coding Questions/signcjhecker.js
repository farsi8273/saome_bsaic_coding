// function checkSign(num1, num2, num3) {
//     // Your code goes here
//       let positiveCount = 0;
//     let negativeCount = 0;

//     if (num1 > 0) positiveCount++;
//     if (num2 > 0) positiveCount++;
//     if (num3 > 0) positiveCount++;

//     negativeCount = 3 - positiveCount;

//     if (positiveCount === 3) return "+++";
//     if (positiveCount === 2) return "++-";
//     if (positiveCount === 1) return "+--";
//     if (positiveCount === 0) return "---";
//   }
// console.log(checkSign(2,-2,-9));
function signchecker(num1, num2, num3) {
  let positive = 0;
  let negative = 0;
  if (num1 > 0) {
    positive++;
  } else {
    negative++;
  }
  if (num2 > 0) {
    positive++;
  } else {
    negative++;
  }
  if (num3 > 0) {
    positive++;
  } else {
    negative++;
  }
  if (positive === 3) {
    return "+++";
  } else if ((positive === 1) & (negative === 2)) {
    return "+--";
  } else if ((positive === 2) & (negative === 1)) {
    return "++-";
  } else if (negative === 3) {
    return "---";
  }
}
console.log(signchecker(-1, 2, -3));
console.log(signchecker(-1, 2, 3));
console.log(signchecker(1, 2, 3));
console.log(signchecker(-9, -2, -3));
