// call stack

// Call stack - Last in First out

// Factorial of 5 = 5*4*3*2*1

// 5 * factorial of 4
// 5 * (4 * factoraial of 3)
// 5 * 4 (3 * factorial of 2)
// 5*4* *3 (2 * factorial of 1)
// 5 * 4 * 3 * 2 * 1

// Macro Task Queue

// console.log("A");
// const pr = new Promise((resolve, reject) => {
//   console.log("B");
//   resolve();
// })
//   .then(() => {
//     console.log("D");
//     console.log("E");
//   })
//   .then(() => {
//     console.log("F");
//     console.log("G");
//   }).catch(()=>{
//     console.log("H");
//   });

// output ? ABDEFG

// console.log("A"); // CALL STACK
// setTimeout(() => {
//   console.log("B"); // MACRO
// }, 0);
// console.log("C"); // CALL STACK

// output ? ACB

console.log("A");  // Call stack
const pr = new Promise((res, rej) => {
  console.log("B"); // call stack
  rej(); 
});
setTimeout(() => {
  console.log("C"); // macro task
}, 0);
pr.then(()=>{
    console.log("D"); // micro task
}).catch(()=>{
    console.log("F"); // micro task
})
console.log('E'); // call stack


// Output : ABFCE
// ADFCE

// ABEFC  - 