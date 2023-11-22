# Lifecycle of a component : 

- Lifecycle of a component is the concept . Implement is done by hooks for functional components , and by lifecycle for class components .
- Remember , Lifecycle methods is a different discussion then lifecycle of a component .
- There are 3 phases for any component to be in : 
   - Mounting
   - Updating
   - Unmounting


### Mounting 
- Here , the initial setup of a component is done . This is just after the component is mounted , added to dom tree
- If we want to write certain logic , functionality just when the component is mounted , we will give useeffect with an empty dependency array .  


### Updating 

- This is also referred to as re-rendering 
- A re-rendering of a component happens when a state or a prop changes
- if we want to write certain logic/functionality just when the component is updated (re-rendered) , we will give useEffect with the tracking state/prop in the dependency array . 

### Unmounting

- This is when the component is removed from the DOM TREE.
- The most common way to unmount any component is to have any certain conditional rendering and not show it .
- then the component is unmounted .
- if we have certain logic that we want to trigger just before unmounting , we use useEffect with empty dependency array and we return that from useEffect . 
- Why we need unmounting custom logic  : 
   - disconnect from the server
   - write some cleanup code
- in the useeffect , we write the logic to set things , we also create a cleanup function inside that , and then we return that cleanup function . 

**Note :The logic of mounting and updating will be triggered after the component is changed , whereas the logic of unmounting will trigerred before the component is unmounted  ***

- One single useEffect hook is equivalence to many lifecycle methods . It is a multi-purpose hook .

# Assignemt 

- use this random api - https://fakestoreapi.com/products
- fetch every 2 seconds and this time show on viewport (only movie title)
- have a checkbox if checked , show the component , if unchecked hide (unmount) the component
- Write the cleanup code to make sure that there are no further api calls when the component is unmounted . 