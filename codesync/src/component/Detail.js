import React from "react";
import moment from "moment";
function Detail({ data, changeVisibleComponent, visibleComponent }) {
  return (
    <div>
      <img src={data.avatar_url} alt="Profile Photo" />
      <h1>{data.login}</h1>
      <h3>
        <a href={data.html_url} target="_blank">
          @{data.login}
        </a>
      </h3>
      <h3>Member since {moment(data.created_at).fromNow()}</h3>
      <div>
        <button
          onClick={() => {
            changeVisibleComponent(1);
          }}
        >
          {data.followers} <span>Followers</span>
        </button>
        <button
          onClick={() => {
            changeVisibleComponent(3);
          }}
        >
          {data.public_repos} <span>Repos</span>
        </button>
        <button
          onClick={() => {
            changeVisibleComponent(2);
          }}
        >
          {data.following} <span>following</span>
        </button>
      </div>
    </div>
  );
}

export default Detail;

// bug - wrong username
