import logo from "./logo.svg";
import "./App.css";
import Search from "./component/Search";
import { useEffect, useState } from "react";
import { github } from "./utils";
import FollowerList from "./component/FollowerList";
import FollowingList from "./component/FollowingList";
import RepoList from "./component/RepoList";
import Detail from "./component/Detail";
function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState("");
  const [visibleComponent, setVisibleComponent] = useState(2);
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
    })(); // IIFE
  }, [username]);

  useEffect(() => {
    if (username === "") {
      return;
    }
    (async () => {
      const response = await github.get(`/${username}`);
      setDetail(response.data);
      console.log(detail);
    })();
  }, [username]);
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

  const loadMoreData = async () => {
    if (visibleComponent === 1) {
      const currentPages = Math.ceil(followerList.length / 30);
      const nextpage = currentPages + 1;
      const response = await github.get(`/${username}/followers?page=${nextpage}`);
      const list = response.data;
      // console.log(list);
      setFollowerList(currenList => {
        const newList = [...currenList, ...list];
        return newList;
      });
      // setFollowerList(list)
    }
  };
  return (
    <div className="App">
      <Search searchedUsername={searchedUsername} />
      <Detail
        data={detail}
        visibleComponent={visibleComponent}
        changeVisibleComponent={setVisibleComponent}
      />
      {visibleComponent === 1 ? (
        <FollowerList data={followerList} />
      ) : visibleComponent === 2 ? (
        <FollowingList data={followingList} />
      ) : (
        <RepoList data={repoList} />
      )}
      <button onClick={loadMoreData}>Load More</button>
    </div>
  );
}

export default App;

// named export vs default export

// visible component : 1: repos,2: followers,3:following
