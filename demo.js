// let array = [1, 2, 3, 4, 5];

// // [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
// // console.log(array); // Output: [5, 2, 3, 4, 1]

// let temp = array[0];
// array[0] = array[array.length - 1];
// array[array.length - 1] = temp;
// console.log(array);

// Array.length();

// function a() {
//   var name = "a"
//   console.log(name);
//   function b() {
//     console.log(name);
//     console.log("b");
//   }
//   return b;
// }
// a()();

// function a (){
//     console.log(this);
// }
// a();
// arrow functions --  hoisting ❌
// traditionals functions -- hoisting ✅
// arrow -- this keyword ❌
// traditionals functions (this) . ✅



// prototpye
// call apply bind


// const jsonstring= '{"name": "rajat","age": 30,"city": "Mumbai"}';
// // const newString= JSON.parse(jsonstring); //Comment this out

// console.log(jsonstring.name); //output is undefined, why?


const circle = {
  radius: 20,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * 'ritik',
};
console.log(circle.diameter());
console.log(circle.perimeter());