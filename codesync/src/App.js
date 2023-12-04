import logo from "./logo.svg";
import "./App.css";
import Search from "./component/Search";
import { useEffect, useState } from "react";
import { github } from "./utils";
import FollowerList from "./component/FollowerList";
function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState("");
  const searchedUsername = (keyword) => {
    setUsername(keyword);
  };

 // 1 -> detail of username
 // 2-> repos 
 // 3-> followers
 // 4-> following


  useEffect(() => {
    if (username === "") {
      return;
    }
    (async () => {   
      const response = await github.get(`/${username}`);
      setDetail(response.data);
      console.log(detail);
      
    })();
  } , [username]);
  useEffect(() => {
    if (username === "") {
      return;
    }
    (async () => {
      const response = await github.get(`/${username}/repos`);
      setRepoList(response.data);
      console.log(repoList);
    })();
  }, [username]);
  useEffect(() => {
    if (username === "") return;

    (async () => {
      const response = await github.get(`/${username}/followers`);
      setFollowerList(response.data);
      console.log(followerList);
    })();
  }, [username]);
  useEffect(() => {
    if (username === "") return;

    (async () => {
      const response = await github.get(`/${username}/following`);
      setFollowingList(response.data);
      console.log(followingList);
    })();
  }, [username]);
  return (
    <div className="App">
      <Search searchedUsername={searchedUsername} />
      <FollowerList data = {followerList} />
    </div>
  );
}

export default App;

// named export vs default export
