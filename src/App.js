import logo from './logo.svg';
import './App.css';
import Login from './Auth/Login';
import Loginnav from './Components/Navbar/Login.nav';



function App() {
  return (
    <div className="App bg-white">
      <Loginnav className='-Loginnav shadow:lg'/>
      <header className="App-header">
          <Login/>
      </header>
    </div>
  );
}

export default App;
