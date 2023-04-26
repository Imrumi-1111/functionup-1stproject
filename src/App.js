import React from 'react';
import ProductCard from './components/card';

function App(){

const productDetails = [
  {
    productId: '1',
    productPic: 'https://www.pexels.com/photo/close-up-of-rolex-9982475/',
    productName: 'watch',
    Brand: 'Rolex',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus euismod, commodo ipsum at, congue magna.',
    Price: '70$',
    Rating: '4'
  },
  {
    productId: '2',
    productPic: 'https://www.pexels.com/photo/expensive-mens-wristwatch-9982491/',
    productName: 'watch',
    Brand: 'Rolex',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus euismod, commodo ipsum at, congue magna.',
    Price: '60$',
    Rating: '5'
  },
  {
    productId: '3',
    productPic: 'https://www.pexels.com/photo/luxury-watch-with-a-bracelet-9982599/',
    productName: 'Watch',
    Brand: 'Rolex',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus euismod, commodo ipsum at, congue magna.',
    Price: '50$',
    Rating: '3.5'
  }
];

const ProductList = () => {

  return (
    <div className="product-list">
      {productDetails.map((productDetail) => (
        <ProductCard key={productDetail.productId} productDetail={productDetail} />
      ))}
    </div>
  );
}
}
export default ProductList;
