# Controlled and Uncontrolled Components 

1. Controlled components 

***In react , controlled and uncontrolled components refer to two different approaches for handling and managing form elements and their states .*** 

- In controlled components , the state of the form elements is managed by the react component's state .
- The value of the from element (like an input field) is controlled by the state of the react component , and changes to the values are handled through React components methods .
- Changes to the form element are typically handled through event listeners , such as `onchange` , `onclick` etc for input elements.
- pls refer to App.js for an example : 
- In that example , the value of the input field is controlled by the `inputValue` state , and any changes to the input are captured through the  `handleChange` function .


2. Uncontrolled components : 

- In Uncontrolled components , the form elements keep their own internal state , and react is not directly involved in managing their state . 
- The value of the form is not controlled by React state , but rather by the DOM (Document object model) itself .
- UseRefs are often used to interact with the values of uncontrolled components .

***Choosing between controlled and uncontrolled componets depends on the specific requiremnts of your application . Comtrolled components are often preferred in react application because they provide a single source of truth for the state and make it more easier to manage and manipulate the form data . However , uncontrolled componets may be useful in certain situations , especially when integrating with non-react code .***