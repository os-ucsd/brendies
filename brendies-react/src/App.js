import React from 'react';
import List from './List';
import Hello from './sayHello';

function App() {
  
 
  // this is the list page; possibly change name eventually
  return (
    <div>
      <h1>this is the app component</h1>
      <button>create list</button>
      <button>sign out</button>
      <List />
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/