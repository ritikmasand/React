import logo from './logo.svg';
import './App.css';
import Search from './pages/Search';
import { Route , Routes } from 'react-router-dom';
import SingleSearchCard from './components/SingleSearchCard';
import SIngleSearchCardSkeleton from './components/SIngleSearchCardSkeleton';
import Details from './pages/Details';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
      </Routes>
      {/* <Search/> */}
      {/* <SIngleSearchCardSkeleton/> */}
    </div>
  );
}

export default App;
