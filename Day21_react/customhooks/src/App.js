import logo from './logo.svg';
import './App.css';
import useInernetStatus from './Hooks/useInternetStatus';
import Online from './components/Online';
import Offline from "./components/Offline";
function App() {
  const internetConnected = useInernetStatus()
  return (
    <div className="App">
    {internetConnected ? <Online/> : <Offline/>}
    </div>
  );
}

export default App;
