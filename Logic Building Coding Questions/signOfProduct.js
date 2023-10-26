// // function signOfProduct(nums) {
// //     let negativeCount = 0;
// //     let hasZero = false;

// //     for (let i = 0; i < nums.length; i++) {
// //         if (nums[i] < 0) {
// //             negativeCount++;
// //         } else if (nums[i] === 0) {
// //             hasZero = true;
// //             break;
// //         }
// //     }

// //     if (hasZero) {
// //         return 0;
// //     } else if (negativeCount % 2 === 0) {
// //         return 1;
// //     } else {
// //         return -1;
// // }
// // }

// // const nums1 = [2, 4, 6, -8]; // Product is positive
// // const nums2 = [-2, 4, 6, -8]; // Product is negative
// // const nums3 = [0, 2, 4, 6];    // Product is zero

// // console.log(signOfProduct(nums2)); // Output: -1
// // console.log(signOfProduct(nums3)); // Output: 0
// // console.log(signOfProduct(nums1)); // Output: 0

// // function signOfProduct(num){
// //     let negativenumber=0;
// //     let haszero=false
// //     for (let i=0;i<num.length;i++){
// //         if(num[i]<0){
// //             negativenumber++
// //         }else if(num[i]===0){
// //           haszero=true
// //           break
// //         }

// //     }
// //     if(haszero){
// //         return 0
// //     }else if(negativenumber%2===0){
// //         return 1
// //     }else{
// //         return -1
// //     }

// // }
// // console.log(signOfProduct([2,-8,-9,3]));
// // console.log(signOfProduct([2,-8,9,3]));
// // console.log(signOfProduct([2,-8,0,3]));
// function signOfProduct(num) {
//   let negativeCount = 0;
//   let hasZero = false;
//   for (i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//       negativeCount++;
//     } else if (num[i] == 0) {
//       hasZero = true;
//       break;
//     }
//   }
//   if (hasZero) {
//     return 0;
//   } else if (negativeCount % 2 === 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(signOfProduct([1, -2, 9, -6]));
// console.log(signOfProduct([1, -2, 9, 0]));
// console.log(signOfProduct([1, -2, 9, 8]));


// // 3. Sign of Product-------------->>>
// function signOfProduct(nums) {
//   let negativeCount = 0;
//   let zeroCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       zeroCount++;
//     } else if (nums[i] < 0) {
//       negativeCount++;
//     }
//   }

//   if (zeroCount > 0 || negativeCount % 2 === 0) {
//     return 0;
//   } else {
//     return -1;
//   }
// }
// Example 1:
// console.log(signOfProduct([2, -3, 5, 4])); // -1
// console.log(signOfProduct([1, 2, 0])); // 0