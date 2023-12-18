# Redux 

- This is a global state manager . 
- The purpose of redux is to make state management easier . 
- Alternatives : MobX , Flux (discontinued) , Recoil . 
- This was developed by Facebook . (Meta)  .
- This is better than context , but only for complicated applications . 
- For simpler applicatons , Context api is better . (or even prop drilling) .
- In context api , one provider can only have 1 data . If that data is changed , then any consumer will have to re-render . 


- We used to use a wrapper for react-redux . Now we use a wrapper for redux-toolkit . 

- Redux is like a global state which is available all over the application . 
- Any component in the app can read the data .
- But to prevent writing , we have reducers .
- any component cannot directly write data onto the redux store .
- **Redux store is a technical term for redux state**
- Instead of directly writing , the component calls the reducer . 
- To do that, we need to dispact the action . 

## Parts of Redux .
- Store : This is the global object . This is a compilcated object .
- Reducers : Thrdr are the functions which have to logic to update the store . 
- Action : These are objects which are passed to the reducers . 

**Actions and reducers are kind of like event and eventListeners . This is a very LOOSE defination . DON'T USE THIS IN INTERVIEW**

- In terms of difficilty : 
- Easiest : Prop drilling
- Medium : Context Api
- More than medium : Redux 

- We will use 2 packages , redux and redux-toolkit .
- Redux is the core . 
- Redux toolkit is a react wrapper . Making it wasy to work with redux in react application . 


- Installation : 
- npm install @reduxjs/toolkit
- npm i redux
- npm i react-redux


### Approach .

1. Install all the three packages . (redux toolkit , redux , react-redux) .
2. Create a slice . 
  - In that slice , we use a createSlice method . This is imported from reduxtoolkit . 
  - in the createSlice method , we pass an object . That object contains 3 things .
  1. name : Name of the slice .
  2. InitialState : The default value in the store . 
  3. Reducers : The object containing functions which can update the store .
  - the reducer takes in 2 parameters : 
  1. Initial value.
  2. action : This is used only when we are passing data to it . To get the data , we use action.payload . 