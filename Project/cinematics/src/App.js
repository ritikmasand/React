import logo from './logo.svg';
import './App.css';
import Search from './pages/Search';
import { Route , Routes } from 'react-router-dom';
import SingleSearchCard from './components/SingleSearchCard';
import SIngleSearchCardSkeleton from './components/SIngleSearchCardSkeleton';
import Details from './pages/Details';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
      {/* <Search/> */}
      {/* <SIngleSearchCardSkeleton/> */}
    </div>
  );
}

export default App;
