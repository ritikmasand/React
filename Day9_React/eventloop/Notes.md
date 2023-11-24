# Event Loop

- This allows use of asynchronous code in js
- It makes the code look like it is runnning parallely.
- This makes promises possible.
- This is an infinite running loop which checks some queue and decides which tasks to pick next . 
- It can pick tasks from 3 places : 
  - Call stack
  - Micro Task Queue
  - Macro Task Queue

### Call Stack 

- This is where the main execution happens
- When a function needs to be executed , it is pushed into the call stack 
- When the execution is finished , it is popped from the call stack . 
- If there is anything in the call stack , that thing is executed first .
- Call stack has the **Highest** priority of execution.
- Stack is a LIFO system , that means , the function which is added last to the stack will complete it's execution first . 


### Micro task Queue 

- These are mostly used for promises . 
- This is a first in first out data structure.
- This stores references of the functions execution .
- If a promise has multiple .then , in that case , they will be executed according to the sequence that they were added . 



### Macro task Queue

- This is primarily used for UI Updation .
- The is also known a callback queue , task Queue or Message Queue.
- This has the **Lowerst** Priority . 
- This will only be checked when the call stack is empty plus the micro task queue also has to be empty .

#### Queue Vs Stack . 
- stack follows LIFO.
- Queue follows FIFO . 

