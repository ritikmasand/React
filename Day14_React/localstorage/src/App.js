import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "use-local-storage";
import Red from "./components/Red";

function App() {
  const [username, setUsername] = useLocalStorage("name", " []");
  return (
    <>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(undefined);
        }}
      >
        Remove Username
      </button>
      <Red>
        <h2>This is hoc</h2>
        </Red>
    </>
  );
}

export default App;
