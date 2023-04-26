//import logo from './logo.svg';
import './App.css';
import Productcard from './components/card';

function App(){
  
  const productDetails1 = {
    productId : '1',
    productPic : 'https://www.pexels.com/photo/silver-linked-bracelet-silver-and-black-round-chronograph-watch-190819/' ,
    productName : 'Watch',
    brand : 'Rolex',
    productDescription : 'Free to use, water proof',
    Price : '60$',
    rating : '4.5'

  }
  const productDetails2 = {
    productId : '2',
    productPic : 'https://www.pexels.com/photo/close-up-photo-of-wristwatch-2113994/' ,
    productName : 'Watch',
    brand : 'Rolex',
    productDescription : 'Free to use, water proof',
    Price : '70$',
    rating : '4.5'

}
const productDetails3 = {
  productId : '3',
  productPic : 'https://www.pexels.com/photo/analogue-blur-chrome-classic-280250/' ,
  productName : 'Watch',
  brand : 'Rolex',
  productDescription : 'Free to use, water proof',
  Price : '80$',
  rating : '4.5'

}
const productDetails4 = {
  productId : '4',
  productPic : 'https://www.pexels.com/photo/classic-clock-conceptual-hours-277390/' ,
  productName : 'Watch',
  brand : 'Rolex',
  productDescription : 'Free to use, water proof',
  Price : '90$',
  rating : '4.5'

}
const productDetails5 = {
  productId : '5',
  productPic : 'https://www.pexels.com/photo/black-apple-watch-with-black-sports-band-437037/' ,
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
return(
  <div className="App">
  
  <Productcard
  useInfo={productDetails1}
  buttonstyle={buttonOneStyle}/>
  
  <Productcard
  useInfo={productDetails2}
  buttonstyle={buttonTwoStyle}/>
  
  <Productcard
  useInfo={productDetails3}
  buttonstyle={buttonThreeStyle}/>
  
  <Productcard
  useInfo={productDetails4}
  buttonstyle={buttonFourStyle}/>
  
  <Productcard
  useInfo={productDetails5}
  buttonstyle={buttonFiveStyle}/>
  </div>
  );
 }
  export default App;
