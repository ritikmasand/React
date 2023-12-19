# Redux

- This is a global state manager .
- The purpose of redux is to make state management easier .
- Alternatives : MobX , Flux (discontinued) , Recoil .
- This was developed by Facebook . (Meta) .
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

3. Move to index.js

- import configitation method added .
- call this function and pass an object with as reducers and the value of the reducer which we exported .
- Wrap the app component inside the provider .
- pass store as a prop to the provider . `provider store = {<store_vatiable>}<App/> </provider>`

4. At this point , the setup of redux is finally completed . Whole application will have access to the redux store .

### Writing to Redux store

- We need to import a hook , `useDispatch` from `react-redux` .
- This we call the function and get dispatch from it and get the reference .
- Then we import the action that we need to call . Then we pass it as a function inside the dispatch .
- Example `dispatch(increment());`, `dispatch(setvalue(data))` .
- If we need to send the payload as well , then we can pass that as an argument inside the action function as well .

### Reading from Redux store

- Here , we use another hook , `useSelector` from `react-redux` .
- This will observe the redux state . if we want to observe any part of that state. then we can pass a callback here only and return that part only .
- example `useSelector(state =>state.text)` . Here text is a key inside the state object .
- This returns an observable data which we can then use in our components .
- Only when the text key of our state changes , then component will be re-rendered. otherwise , no re-rendering

# Assignment : 
- Create a counter Application .
- Appjs -> Comp1 and compA
- App.js has the display of span tag .
- Comp1 -> Comp2
- CompA -> CompB 

- Comp 2 has a button of increment 
- Comp B has a button of decrement 
- Use Redux