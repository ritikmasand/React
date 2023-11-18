# HOOKS

- Hooks are special functions
- These will provide additional functionality to your code
- These are mostly stateful components
- These functions are tracked by react
- if anything changes from this function's output , the componenet will re-render.
- These functions (Hooks) will give superpowers to your react-application
- Because hooks are functions , every hook has to be imported , if we have to use it .
- to identify , most developers write the hook starting with `use`
- this is not mandotary , but a general practice
- Hooks are the abiliyy to re-render a component .

- Example : react-timer-hook

## Hook vs Component

- Components contain jsx
- Hooks are purely js
- compoents can be stateful or stateless
- Hooks are stateful

**Rendering-----> Displaying , re-rendering ----> Updating**

## State

- If I want react to track any variable , i need to create a state hook.
- React will track variables for changes
- If there is any change , the component will be re-rendered .
- UseState is the name of that hook which we will call to create trackable variables .
- whenever we invoke the usestate hook method , we can give the default value as it's argument .
- when we invoke the function of use-state . it will return an array of 2 elements.
- The 0th index contains the trackable variable .
- if the variable is updated , the component will be re-rendered
- in js , variables cannot be tracked.

**State are those variables which are tracked by react , updating which we trigger a componenet re-render**

# Assignment

- Implement a dark/light them functionlaity in the website
- It should have a button (toggle) , on toggling it should change the theme from
  dark -> light or vica-versa
