import logo from './logo.svg';
import './App.css';
import Productcard from './components/card';

function App() {
  const productDetails1 = {
    productId : '1',
    
    productPic : 'https://www.pexels.com/photo/close-up-of-rolex-9982475/' ,
  
    productName : 'Watch',
    brand : 'Rolex',
    productDescription : 'Free to use, water proof',
    Price : '60$',
    rating : '4.5'

  }
  const productDetails2 = {
    productId : '2',
    productPic : './images/watch2' ,
    productName : 'Watch',
    brand : 'Rolex',
    productDescription : 'Free to use, water proof',
    Price : '70$',
    rating : '4.5'

}
const productDetails3 = {
  productId : '3',
  productPic : './images/watch3' ,
  productName : 'Watch',
  brand : 'Rolex',
  productDescription : 'Free to use, water proof',
  Price : '80$',
  rating : '4.5'

}
const productDetails4 = {
  productId : '4',
  productPic : './images/watch4' ,
  productName : 'Watch',
  brand : 'Rolex',
  productDescription : 'Free to use, water proof',
  Price : '90$',
  rating : '4.5'

}
const productDetails5 = {
  productId : '5',
  productPic : './images/watch5' ,
  productName : 'Watch',
  brand : 'Rolex',
  productDescription : 'Free to use, water proof',
  Price : '65$',
  rating : '4.5'

}

const buttonOneStyle = {
  background : 'pink'
}

const buttonTwoStyle = {
  background : 'pink'
}
const buttonThreeStyle = {
  background : 'pink'
}

const buttonFourStyle = {
  background : 'pink'
}
const buttonFiveStyle = {
  background : 'pink'
}



  return (
    <div className="App">
      <header className="App-header">
        
        <Productcard
        useInfo ={productDetails1}
        buttonStyle = {buttonOneStyle}
        />
        <br/>




        <Productcard
        useInfo ={productDetails2}
        buttonStyle = {buttonTwoStyle}
        />
        <br/>





        <Productcard
        useInfo ={productDetails3}
        buttonStyle = {buttonThreeStyle}
        />
        <br/>





        <Productcard
        useInfo ={productDetails4}
        buttonStyle = {buttonFourStyle}
        />
        <br/>





        <Productcard
        useInfo ={productDetails5}
        buttonStyle = {buttonFiveStyle}
        />

      </header>
    </div>
  );
}


export default App;
