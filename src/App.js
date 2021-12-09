import logo from './logo.svg';
import './App.css';
import State from './pages/state/State';
import Props from './pages/props/Props';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Functional from './pages/functional/Functional';
import Class from './pages/class/Class';
import ClassLifeCycle from './pages/classlifecycle/ClassLifeCycle';
import FuncLifeCycle from './pages/functionlifecycle/FuncLifeCycle';
import ReactHooks from './pages/hooks/ReactHooks';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/state" element={<State />}></Route>
        <Route exact path="/props" element={<Props />}></Route>
        <Route exact path="/functional" element={<Functional />}></Route>
        <Route exact path="/class" element={<Class />}></Route>
        <Route exact path="/classlifecycle" element={<ClassLifeCycle color="blue"/>}></Route>
        <Route exact path="/funclifecycle" element={<FuncLifeCycle />}></Route>
        <Route exact path="/hooks" element={<ReactHooks />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
