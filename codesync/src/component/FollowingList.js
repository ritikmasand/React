import React from "react";

function FollowingList({ data }) {
  return (
    <div>
      <h2>Following List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <img src={elem.avatar_url} alt="" />
                </td>
                <td>
                  <a href={elem.html_url}>{elem.login}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FollowingList;
