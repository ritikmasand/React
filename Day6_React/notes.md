# useEffect

- This is a built-in hook built into react . we need to import this in order to use it.
- This is a hook (function) which accepts 2 things . 
   - callback function
   - dependecy array
- If anything from that dependancy array changes , then it will call the callback function.
- usage - if we want to execute a certain function if the state value changes .
- The state can be any state we have in our code .
- This is used manage/implement the side - effects
- Side effect is the functionality that is not needed but still we have it in our code . 
- ex : whenever we make an api call using a state hook , it will
cause some side effect like updating the UI or storing data somewhere etc.. and due to this we will get unlimited api calls 


**Hooks were introduced after 16.8**

# Api : 
- This is an interface (like a bridge) for communication between two pieces of software . 


# Fragments 
- Typically from a component we return a div . These tags are added to the actual dom .
- what if we dont want them ? maybe we want to minimize the size of the application
- becasue we cannot return multiple tags , having div or any becomes a necessity .
- This solution is a framgent . <> </>