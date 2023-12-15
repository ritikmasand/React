## Pure functions

- Any function which matches this following criteria is considered to be a pure functions .
- If i call a function , with the same arguments multiple time . Each time it should give me the same result .
- A pure function should not depend on any data outside of the function . (It can use the data being passed in it's parameter)
- A pure function should not have any side - effects . It should not change the original data which is passed to it . (Pass by reference should be handled properly) . If the function accepts an array or object , then before manipulating it , the function should create a deep clone of that data .
- Any function that satisfies all these conditions is said to be a pure function .
- Pure functions are good to have .
- This is not a tecnical concept , there is not keyword such as pure . This is an idea which we should follow .
- The idea is for better code maintenence and readibility and re-usuability .
- Because the functions are pure , they can be treated as modules and easily moved from 1 place to another and easily be used by many other places .
- We want to have as many pure functions as possible in our code .
- There can not be 100% purity in the code , but as much as possible , we would want .
- Any function which does not follow 1 or more of the things is considered to be an impure function .

## Types of consoles :

console.log('This is a log message')
