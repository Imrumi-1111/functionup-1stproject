

import './card.css'
export default function Productcard({useInfo,buttonstyle}){
    const {
        productId ,
        productPic ,
        productName ,
        brand ,
        productDescription ,
        Price ,
        rating 
    } = useInfo
    const handleAddToCart = () => {
        alert(`Product ${productId}, which is ${brand} ${productName} of ${Price} is added in the cart, please proceed to pay!!!`);
      }
    return (
        
        <div className= 'card'>
           
            <img
            src={productPic}
            width = '100px'
            height = '100px'
            borderRadious = '50%'/>
            <br/>
            <h1>{productId}</h1>
            <br/>
            <p>{productName}</p>
            <br/>
            <p>{brand}</p>
            <br/>
            <p>{productDescription}</p>
            <br/>
            <p>{Price}</p>
            <br/>
            <p>{rating}</p>
            <br/>
            <button
            
            onClick ={handleAddToCart}
            style = {buttonstyle}
            >Add to the cart
            </button>
            

        </div>
        
    )
}