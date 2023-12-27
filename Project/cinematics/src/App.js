import logo from './logo.svg';
import './App.css';
import Search from './pages/Search';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      {/* <Search/> */}
    </div>
  );
}

export default App;
