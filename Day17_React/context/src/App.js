import logo from './logo.svg';
import './App.css';
import { contextMain } from './contexts';
import CompA from './components/CompA';

function App() {

  const data = 'ABCD'
  return (
    <div className="App">
      <contextMain.Provider value={data}>
        <CompA/>
      </contextMain.Provider>
    </div>
  );
}

export default App;
