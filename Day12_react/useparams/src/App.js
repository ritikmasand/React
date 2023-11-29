import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="*" element={<h2>Error 404 !!! Not Found</h2>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
