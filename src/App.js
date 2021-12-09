import logo from './logo.svg';
import './App.css';
import State from './pages/state/State';
import Props from './pages/props/Props';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/state" element={<State />}></Route>
        <Route exact path="/props" element={<Props />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
