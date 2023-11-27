# useref

- This hook is also a part of react .
- This hook is an alternate to document.getblahblah
- We never directly access the dom .
- We have access to the virtaul dom
- We technically can access the dom directly . However , react will not be able to detect that we have accessed the dom (document object model).
- React asks us to not directly access , instead we use the react Provided methods . This is helpful because then react can track the changes that we are doing .
- The trackin is useful for re-rendering optimizations .

- Usage :

- Import the useref hook from react .
- Create a refernce object by running `const abcdRef = useRef();`
- Connect this to the dom element by giving a ref attributes to that element .
  `<p> ref={abcdRef} </p>`
- In order to access the Dom element , we need to use the variables current property . `abcdRef.current` .
- After this , we can access the element as usual . Properties like InnerHTML , appenchild , style , value , click() , addeventlisterner .

# Virtual Dom

- This is also commonly called a VDOM .
- This is like a copy/refernce of the real dom.
- This copy is a virtual (In memory) refenence of the dom .
- ReactDom does it for us .

### Recocilation and diffing keywords

- We as a programmer do not need to handle connection and updation to the real dom .
- When we are changing multiple things in a very short period . Like 1 tick of the event loop .
- Then , it will push all those updates in the virtual dom (Vdom) and make only 1 update to the Real dom .
- Virtual Dom helps for high performance and optimizations .
- When we change something , that change is written on the virtual dom , then react will check and update the real dom .
- Diffing is a programming concept , not specific to react . This defines there are two trees to be compared
- Diffing is a short for checking differences between 2 things.
- Recocilation is basically syncing of both the DOMs (virtual dom and real dom) .
- React does not want the programmers to use/connect to the real dom . we should always refer to the virtal Dom

## event.preventDefault()

- some of the events have certain actions associated with it .
- common examples of forms , when we submit the form , browser triggers an action to redirect the page to the server .
- Most of the times , we want to stop the default thing from happening , therefore we use the object's preventDefault() method .
- preventDefault will prevent the default action from happening for that particular event .
- This is used when we customize the functionality/logic and we do not want the default logic to happen
- This is part of vanilla JS .
