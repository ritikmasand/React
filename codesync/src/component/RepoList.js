import React from "react";

function RepoList({ data }) {
  return (
    <div>
      <h2>Repo List</h2>
      <h2>Total Number of repos - {data.length}</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {data.map((elem, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <a href={elem.html_url}>{elem.name}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RepoList;
