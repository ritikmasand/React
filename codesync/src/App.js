import logo from "./logo.svg";
import "./App.css";
import Search from "./component/Search";
import { useState } from "react";
function App() {
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState("");
  const searchedUsername = (keyword) => {
    setUsername(keyword);
    // console.log(username);
  };

  // const add = (num) =>{
  //   console.log(num);
  // }
  // add(4)
  return (
    <div className="App">
      <Search searchedUsername={searchedUsername} />
    </div>
  );
}

export default App;
