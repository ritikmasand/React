import React from "react";
import moment from 'moment'
function Detail({ data }) {
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
    </div>
  );
}

export default Detail;


// bug - wrong username 