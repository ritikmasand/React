# Router

- This allows routing . (Navigating between multiple pages of a site)
- This allows dynamic component change . That means , we do not need to refreshed .
- This is basically conditional rendering but with some modifications .

## SPA

- It stands for single page applications .
- When we naivigate , only the content that needs to be changes is changes , rest other things remain as same .
- Other than SPA , when we navigate , whole webpage is loaded again .
- React is SPA .
- Airbnb is SPA

## MPA

- Multiple Page Applications .
- Regular websites which load the whole html are MPA .
  example - NASA is MPA

React -> website + Native (Mobile Applications)
React --> Dom + Native

// react-router-dom
// react-router-native
// common part is react-router (Core)

**Note: Since we are working with website , we need to install dom wrapper of react -router . This package is called as react-router-dom**

## Router Setup

- run npm i react-router-dom
- Need to wrap the app component inside <BrowserRouter>
- Wherever we want to add the condition , (typically app.js) , we use Routes and inside Routes ,we use a singular route
- <Routes> </Routes> is import which you have to make from react-router-dom .
- inside <Routes> we have a <Route>
- <Route> needs to have 2 attributes .
- path - Which path to check for this route . Note , paths start with a `/`
- elememt - When the user is on that path , which element/component you want to show .
- This is used to control the rendering path . Apart from this we also need to navigate part .
- We CANNOT use anchor tags because their purpose is to load the whole content again and not re-render the component .

- We use a link component for navigation
- to - Im this attribute , we define the path where we want the users to land .

## Assignment

- Create a react application with router .
- in this app , make it like a portfolio . (without css).
- pick any 4-5 movies and create a component for each movie and have a navigation bar which shows all the movies .
- Then when we click on any one movie , then show that particular moview component .
