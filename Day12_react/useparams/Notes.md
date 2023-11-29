# Pages in react 
- There is no such thing as pages , those are components only .
- We use them as pages . A single page is defined as a single route , or a single path .
- The concept of pages is only with respect to react router . 
- We can say a page is a collection of components and a website is a collection of pages. 


## useNavigate hook

- This is the js way of implmenting Navigation
- This is an alternate to Link Component 
- This we will use when we don't / can't he link component
- Maybe route based on certain conditions/validations


### 404 in React Router
- This is when no paths are matched but we still want to show something
- by default , if no paths are matched , react will not show anything .
- Therefore , to handle all the paths other than the ones defined , we use asterisk (*) symbol 
- The asterick symbol is like a wildcard , this means to match all the paths , whatever path the user tries to open , this component will be shown .

### Assignment 
- The project that we made for movies yesterday , we need to add a 404 page to that . 