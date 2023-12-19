import logo from "./logo.svg";
import "./App.css";
import { setValue } from "./slice";
import { useDispatch } from "react-redux";
import ChildA from "./components/ChildA";
function App() {
  const dispatch = useDispatch();
  const dataChanged = (e) => {
    const data = e.target.value;
    console.log(data);
    dispatch(setValue(data));
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onKeyUp={dataChanged} />
        <ChildA/>
      </header>
    </div>
  );
}

export default App;
