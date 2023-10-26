// function finbuzz(n){
//     let arr=[];
//     for(i=1;i<=n;i++){
//         if(i%3===0&i%4===0){
//             arr.push("FinnBuzz")
//         }else if(i%3===0){
//             arr.push("Fizz")
//         }else if(i%4===0){
//             arr.push("Finm")
//         }else{
//             arr.push(i.toString())
//         }
//     }
//     return arr

// }
// console.log(finbuzz(12));

// Second Approach with Switch

function finbuzz(n) {
  let result = [];
  for (i = 1; i <= n; i++) {
    switch (true) {
      case (i % 3 === 0) & (i % 4 === 0):
        result.push("FinBuz");
        break;
      case i % 3 === 0:
        result.push("Fizz");
        break;
      case i % 4 === 0:
        result.push("Buzz");
        break;
      default:
        result.push(i.toString());
    }
  }
  return result;
}
console.log(finbuzz(12));
