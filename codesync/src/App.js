import "./App.css";
import Search from "./component/Search";
import { useEffect, useState } from "react";
import { github } from "./utils";
import FollowerList from "./component/FollowerList";
import FollowingList from "./component/FollowingList";
import RepoList from "./component/RepoList";
import Detail from "./component/Detail";
import Footer from "./component/Footer";
function App() {
  const [detail, setDetail] = useState({});
  const [repoList, setRepoList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState("");
  const [visibleComponent, setVisibleComponent] = useState(2);
  // const []
  const searchedUsername = (keyword) => {
    setUsername(keyword);
  };  // jugaad /  

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

  const showLoadMore = () => {
    if (visibleComponent === 1) {
      if (followerList.length === detail.followers) {
        return false;
      } else return true;
    } else if (visibleComponent === 2) {
      if (followingList.length === detail.following) {
        return false;
      } else return true;
    } else {
      if (repoList.length === detail.public_repos) {
        return false;
      } else return true;
    }
  };

  const loadMoreData = async () => {
    if (visibleComponent === 2) {
      const currentPages = Math.ceil(followingList.length / 30); // 1
      const nextpage = currentPages + 1; //2 
      const response = await github.get(
        `/${username}/following?page=${nextpage}`
      );
      const list = response.data;
      // console.log(list);
      setFollowingList((currenList) => {
        const newList = [...currenList, ...list]; // using rest operator
        return newList;
      });
      // setFollowerList(list)

      // feature to be implemented : not showing followers list when followers are less than 30
    } else if (visibleComponent === 1) {
      const currentPages = Math.ceil(followerList.length / 30);
      const nextpage = currentPages + 1;
      const response = await github.get(
        `/${username}/followers?page=${nextpage}`
      );
      const list = response.data;
      setFollowerList((currenList) => {
        const newList = [...currenList, ...list];
        return newList;
      });
    } else {
      const currentPages = Math.ceil(repoList.length / 30);  //1
      const nextPage = currentPages + 1; //2
      const response = await github.get(`/${username}/repos?page=${nextPage}`);
      const list = response.data;

      setRepoList((currenList) => {
        const newList = [...currenList, ...list];
        return newList;
      });
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

      {showLoadMore() === true ? (
        <button onClick={loadMoreData}>Load More</button>
      ) : (
        false
      )}
      <Footer />
    </div>
  );
}

export default App;

// named export vs default export

// visible component : 1: repos,2: followers,3:following
