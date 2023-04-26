import React from 'react';
import './card.css'
//function App(){
//<header className= 'App'>

const ProductCard = ({ productDetail }) => {

  const { productId, productPic, productName, Brand, productDescription, Price, Rating } = productDetail;

  const handleAddToCart = () => {
    alert(`Product ${productId}, which is ${Brand} ${productName} of rupees ${Price} is added in the cart, please proceed to pay!!!`);
  }

  return (
    <div className='card'>
      <img src = {productPic} 
      height = '200px'
      width = 'auto'
       />
      <div className="card-body">
        <h5 className="card-title">{Brand} {productName}</h5>
        <p className="card-text">{productDescription}</p>
        <p className="card-text">Price: {Price}</p>
        <p className="card-text">Rating: {Rating}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
//</header>


export default ProductCard ;
