import React from 'react'
//import {App} from './components/App.js';
import './App.css';
import Details from './components/details'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Welcome to upsi's site</h1>
        <Details name={"crowd"} state={"uncomfortable"}/>
        <p>
          <code>To view this</code>
         
        </p>
        
        <a
          className="App-link"
          href="https://reacthttps://logos-world.net/wp-content/uploads/2020/09/Chrome-Logo.pngjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          click me
        </a>
       
      </header>
    </div>
  );
}

export default App;
