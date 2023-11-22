import logo from './logo.svg';
import './App.css';
import { useEffect , useState } from 'react'
import Child from './component/Child';
function App() {
  const [showchild , setshowChild] = useState(false)
  // Mounting
  useEffect(()=>{
   console.log('This is mounting of parent');
  } , [])
   // Updating 

   useEffect(() => {
     console.log("Parent is updating");
   }, [showchild]);

  return (
    <div className="App">
     <input type='checkbox' onChange={e =>setshowChild(e.target.checked)}/>
     {showchild===true ? <Child/> : false}
    </div>
  );
}

export default App;
