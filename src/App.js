import React from 'react';
import './App.css';

import Overlay from './Utilities/Overlay';

function App() {

  const logMsg = () => {
    console.log('Hello there')
  }

  const openModal = () => {
    const overlayAPI = new Overlay();
    overlayAPI.showModal(<button onClick={() => {overlayAPI.closeModal()}}>CLOSE</button>);
  }

  const showSnackbar = () => {
    const overlayAPI = new Overlay();
    overlayAPI.showSnackbar('Successfully Clicked the Button!')
  }

  return (

    <div className="App">
      <header className="App-header">        
        <button onClick={openModal}>Open Modal</button>
        <button onClick={showSnackbar}>show snackbar</button>
      </header>
    </div>
  );
}

function AnotherApp(props) {
  return (
    <div>
      <div>
        <h3>ANother App</h3>
      </div>
    </div>
  )
}

export default App;
