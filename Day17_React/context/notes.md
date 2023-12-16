# Context (or Context Api)

- This is a better way to send data from an ancestor to a descendent directly .
- This is better because we do not have to change the components in the middle of the tree.
- This kind of makes it more secure . (Even though the components have access , but directly as a prop we are not sending)
- Initially it is kind of challenging as compared to prop drilling .
- In order to implement this , we use a createContext method of react . We use this to create the context object . 
- This object is typically in a seperate file and exported . If we want to use it in react , we obviosuly have to import it . 

- A context has 2 parts . 
1. Provider : It provides access to the value that needs to be shared across different components .
2. Consumer : It retrieves the value provided by the provider .
- A single contect can have only 1 provider , but can have a multiple consumer . 
- When creating a provider , we just import the createContect and use it's `provider` property . 
- This provider is a high order component has childer inside it . 
- the childer and their whole tree can have access to the data of this context .
- In order to use it , there are 2 main approaches .
- use the `consumer` component .
- This callback will have a parameter which will be the value of the context .

- with the help of `usecontext` hook . 
 - we import hook from react .
 - This returns the value of the context .

- In the provider , the data is sent as a value prop . the prop name has be `value` . Data can be anything . 
