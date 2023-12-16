// This is a pure function , it will give same result every time .

// const a = (num1, num2) => {
//   const sum = num1 + num2;
//   return sum;
// };

// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));

// This is not a pure function
// This is not fine because there is randonmess involved .
// const a = (num1, num2) => {
//   const sum = num1 + num2 + Math.random();
//   return sum;
// };

// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));

// This is not a pure function because it depends on data outside of the function
// let temp = 10;
// const a = (num1, num2) => {
//   temp = num1 + num2 + temp;
//   return temp;
// };

// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));
// console.log(a(10, 20));

// here , the function has a side effect of changing the original data which is being passed to it
// const fn = (arr) => {
//   arr.push("New element");
//   console.log(arr);
//   return arr.length;
// };

// const arr1 = [1, 2, 3, 4, 5];
// console.log(fn(arr1));

// This is a pure function as it satisfies condition 3
// const fn = (arr) => {
//   const new_arr = [...arr];
//   new_arr.push("New Element");
//   return new_arr.length;
// };

// let arr1 = [1, 2, 3, 4, 5, 6];

// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));
// console.log(fn(arr1));

// Not a pure function , breaking concition 2
// const arr = [1, 2, 3, 4, 5];
// const fn2 = () => {
//   return arr.length;
// };

// console.log(fn());

// This is not a pure function
// Q 1 :
// const fn3 = () => {
//   const today = new Date();
//   return today.getTime();
// };

// console.log(fn3());
// console.log(fn3());

// console.log("This is a log message");

// console.error("This is a error message");

// console.warn("This is a warn message");

// const arr = ["Imran", "Ritik", "Thoukeer", "Rajat", "Varuna"];

// console.log(arr);

// console.table(arr);

// const obj = {
//   fname: "ABCD",
//   lname: "EFGH",
//   phone: "+9134234",
// };

// // console.table(obj);

// console.dir(obj)

// console.count();
// console.count();
// console.count();
// console.count();
// console.count();
// console.count();

// console.log("%cStop %cHere", "color:red;font-size:5rem;color:yellow");

// const fn4 = (arr1, arr2) => {
//   arr1 = arr1.concat(arr2); // this is equivalent to creating a deep copy with the concatenation
//   console.log(arr1);
// };

// // arr1 = [1,2,3,4,5,6,7,8]
// const first = [1, 2, 3, 4, 5];
// const second = [5, 6, 7, 8];


// fn4(first, second);
// fn4(first, second);
// fn4(first, second);
// fn4(first, second);
