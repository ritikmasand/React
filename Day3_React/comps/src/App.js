import logo from "./logo.svg";
import "./App.css";
import BtnClicked from "./components/BtnClicked";
import AnotherComp from "./components/AnotherComp";
function App() {
  var name = "Rajat";
  const arr = [1, 2, 34, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <header className="App-header">
        <BtnClicked array={arr} />
        <AnotherComp name={name} name2="Imran" />
      </header>
    </div>
  );
}

export default App;
