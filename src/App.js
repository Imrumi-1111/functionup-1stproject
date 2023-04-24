import React from 'react'

// import  Images1  from ''
// import  Image2  from ''
// import  Image3  from './images/baburao.jpg'
import Profilecard from './components/profilecard'

//import logo from './logo.svg';
import './App.css';

function App() {

  

  function cardText() {
    alert('Raju Srivastav')
  }
  function caRdtext() {
  alert('Shyam Tiwari')
  }
  function carDtext(){
    alert('Baburao Ganpatrao')
  }

  return (
    <div className="App">
     
       <header className='App-header'> 
       <img src={"./image/Raju.jpg"} className="Raju-img" alt="raju"/>
       <Profilecard 
       card1 ='Raju Srivastav'
       onClickFunction = {cardText}
      
       designation={'UI/UX DESIGNER'} name={'Raju Srivastav'} job={ 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}/>
       

       <img src="./image/Raju.jpg" className="Shyam-img" alt="shyam"/>
       <Profilecard 
       card2 ='Shyam Tiwari'
       onClickFunction = {caRdtext}
       
       designation={'UI/UX DESIGNER'} name={'Shyam Tiwari'} job={ 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}/>
       
       <img src="./image/Raju.jpg" className="Baburao-img" alt="baburao"/>
       <Profilecard 
       card3 ='Baburao Ganpatrao'
       onClickFunction = {carDtext}
       
       designation={'UI/UX DESIGNER'} name={'Baburao Ganpatrao'} job={ 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}/>
      
      </header>
    </div>
  );
}

export default App;
