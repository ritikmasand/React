import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<h2>Homepage...</h2>} />
          <Route path='/data/:key1' element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
