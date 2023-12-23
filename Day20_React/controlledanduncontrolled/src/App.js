import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Uncontrolled from './components/Uncontrolled';
function App() {
   const [inputValue, setInputValue] = useState("");
   const handleChange = (e) =>{
    setInputValue(e.target.value)
   }
  return (
    <div className="App">
     <input type="text" value={inputValue} onChange={handleChange}/>
     {inputValue}
     <Uncontrolled/>
    </div>
  );
}

export default App;
