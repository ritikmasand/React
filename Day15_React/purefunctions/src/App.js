import "./App.css";
import ChildA from "./components/ChildA";
function App() {
  // const [receivedata, setreceivedata] = useState(null);
  // const handlechildbuttonclick = (data) => {
  //   setreceivedata(data);
  // };
  var data = "magic data";
  return (
    <div className="App">
      <h2>Parent component</h2>
      {/* <p>Data recieved from childcomponent : {receivedata}</p> */}
      {/* {console.log(setreceivedata)} */}
      {/* <ChildComponent onButtonClick={handlechildbuttonclick} /> */}

      {/* <h2>{data} -&gt; App</h2> */}
      {/* <ChildA data={data} />
      <ChildD data={data} />
      <ChildC data={data} /> */}
      <ChildA data={data} />  
    </div>
  );
}

export default App;
