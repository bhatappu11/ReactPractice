import logo from './logo.svg';
import React from 'react';
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
import Modal from './components/modal/Modal';

function App() {
  const showPortal = false;
  const [showModal, setShowModal] = React.useState(false);
  const handleShowMessageClick = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  return (
    <div className="App">
    <Router>
    
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
    
    </Router>
    <div
    style={{
      height: '100%',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        maxWidth: 400,
        position: 'relative',
      }}
    >
      <h1>My App</h1>
      <p>
        This is an example of how you might use React.createPortal. I think
        it is a pretty neat API that is yet another awesome escape hatch
        that React provides for practical reasons. Sometimes you just need
        to render something completely outside the React Tree.
      </p>
      <button onClick={handleShowMessageClick}>
        Show Secret Modal
      </button>
      {showModal ? (
        <Modal onClose={handleCloseModal}>
          This is the secret modal message!
        </Modal>
      ) : null}
    </div>
  </div>
  </div>
  );
}

export default App;
