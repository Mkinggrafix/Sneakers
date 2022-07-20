import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/Commerce";

function SingleProduct() {
  const productId = window.location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    commerce.products.retrieve(productId).then((res) => {
      setProduct(res);
    });
  }, []);
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
  };
  const { name, price, image } = product;
  return (
    <div>
      <img src={image?.url} alt="" />
      <h2>{name}</h2>
      <h3>{price?.formatted_with_symbol}</h3>
      <button onClick={() => handleAddToCart(productId, 1)}>Add to cart</button>
    </div>
  );
}

export default SingleProduct;
