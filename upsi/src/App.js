import logo from './logo.svg';
import './App.css';
//import { Button, } from './components/button/button';
//import Card from './components/card/card';

function App() {

  //  components -/> small isolated piece of code of you complete ui .
  // components  -/> functions (react function)
  //  js function -/> takes datatype as input and return data types
  // react function -/> takes props as input and return jsx / html likw components .
  //  react functions startWith Capital letter only . 


//   Jsx -/> javascript extension 
//   it provides the power to write the html in js file 

//  ui 
//  functionality 
//  data management 
//  folder structure (Atomic folder structure)


//  css  -> style to style the component
//  js -/> code to ceate the component 



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Benefits of using react...</h1>
      <h2>
        <ol>
          <li>Components-based architecture</li>
          <li>Virtual DOM for efficient updates</li>
          <li>Rich ecosystem and community</li>
          <li>Cross-platform development</li>
          <li>Strong community support:</li>
        
        </ol>
      </h2>
      <button>
            Get started...
        </button>
    
      </header>
    </div>
  );
}

export default App;