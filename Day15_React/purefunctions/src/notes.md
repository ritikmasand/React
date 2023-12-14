## Prop Drilling

- When we have some data at an ancestor and we want to send it to a descendent . 
- They are not immediate parent/child . If the two components were immediate parent child , then this would be just a usual prop .
- But since the two components are not immediate parent/child , we use a concept called as 
prop drilling .
- Advantage of this is that we are able to send the data multiple level down . 
- Disadavantage is that each level will have access to that data . Unnecessary accces is bad . 
- Also , at each level we will have to pass it as a prop to the child .


### What is the differnce between prop drilling and state lifting ? 
- Prop Drilling is used to send the data down the hierachy in our component tree .
- The topmost parent by default it is App.js .
- State Lifting is used to send the data up the component tree. 
- State lifting is done with the help of callback functions , whereas the prop drilling can be just done directly . 



***Note : Due to the shortcomings/loophole in prop drilling , we have a concept called as Context api and redux which removes this hoophole .***


<!-- // Todos 

1 -> Lifecycle (unmouting)
2 -> pure compoments 
3 -> consoles 



4 -> context 
5 -> redux 

6 -> Internet is Connected hook 

6 -> IMDB Project -->  