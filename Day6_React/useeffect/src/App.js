import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const [state, setstate] = useState(false);
  const fn = () => {
    setstate(!state);
  };
  useEffect(() => {
    (async () => {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setList(data.data);
      console.log(list);
    })();
  }, []);

  return (
    <>
      <h2>Api sample calls</h2>
      <ul>
        {list.map((e, idx) => {
          return (
            <li key={e.id}>
              {e.first_name} - {e.last_name} - {e.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;


// virtual dom 