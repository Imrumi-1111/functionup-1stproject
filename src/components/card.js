

import './card.css'
export default function Productcard({useInfo,buttonstyle}){
    const {
        productId , productPic , productName , brand , productDescription , Price , rating } = useInfo
    const handleAddToCart = () => {
        alert(`Product ${productId}, which is ${brand} ${productName} of ${Price} is added in the cart, please proceed to pay!!!`);
      }
    return (
        
        <div className= 'card'>
            <div>
           
            <img
            src={productPic}
            width = '300px'
            height = '450px'
            borderRadious = '70%'/>
            
            <h1 className = "productId">{productId}</h1>
            
            <p className = "productName">{productName}</p>
            
            <p className = "productName">Brand : {brand}</p>
            
            <p className = "productName">{productDescription}</p>
            
            <p className = "productName"> Price : {Price}</p>
            
            <p className = "productName"> Rating : {rating}</p>
            
            <button
            
            onClick ={handleAddToCart}
            style = {buttonstyle}
            >Add to the cart
            </button>
            </div>
            

        </div>
        
    )
}