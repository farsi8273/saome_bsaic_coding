//code with bug

// function calculateTip(billAmount, tipPercentage) {
//     // Write your code here
//     const tipAmount = billAmount * tipPercentage;
//     const totalAmount = billAmount + tipAmount;
//     return number(totalAmount.toFixed(2));
// }
// console.log(calculateTip(252.55,.25));

//code without bug

function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

console.log(calculateTip(25.55,.25));

