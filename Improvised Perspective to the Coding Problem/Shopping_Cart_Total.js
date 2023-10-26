// function calculateTotal(cart) {
//     // Write your code here
//     let total = 0;
//     for (let i = 0; i < cart.length; i++) {
//         total += cart[i].price * cart[i].quantity;
//     }
//     return total;
// }
// const cart2 = [
//     { name: "Fruits", price: 10, quantity: 5 },
//     { name: "Vegetables", price: 8, quantity: 3 },
//     { name: "Dairy", price: 5, quantity: 2 },
//     { name: "Snacks", price: 3, quantity: 10 },
//   ];
//   let result=calculateTotal(cart2)
//   console.log(result);

// Second Approach++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   function totalcaculate(chart1){
//     let total=0;

//     total=chart1.reduce(function(accum,item){
//         return accum+item.price*item.quantity;

//     },total)
//     return total

//   }
//   const cart1 = [
//     { name: "Fruits", price: 10, quantity: 5 },
//     { name: "Vegetables", price: 8, quantity: 3 },
//     { name: "Dairy", price: 5, quantity: 2 },
//     { name: "Snacks", price: 3, quantity: 10 },
//   ];
//   let result=totalcaculate(cart1)
//   console.log(totalcaculate(result));

// Third Approach++++++++++++++++++++++++++++++++++++++

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
const cart1 = [
  { name: "Fruits", price: 10, quantity: 5 },
  { name: "Vegetables", price: 8, quantity: 3 },
  { name: "Dairy", price: 5, quantity: 2 },
  { name: "Snacks", price: 3, quantity: 10 },
];
let result = calculateTotal(cart1);
console.log(result);
