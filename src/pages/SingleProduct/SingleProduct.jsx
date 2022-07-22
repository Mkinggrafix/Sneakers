import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/Commerce";
import AddToCartLoad from "../../components/Loading/AddToCartLoad";

function SingleProduct({ 
  handleAddToCart,
  isAddToCartLoading,
  setIsAddToCartLoading,
 }) {
  const productId = window.location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [isSingleLoading, setIsSingleLoading] = useState(true)

  useEffect(() => {
    commerce.products.retrieve(productId).then((res) => {
      console.log(res)
      setProduct(res);
      setIsSingleLoading(false)
    });
  }, []);

  const { name, price, image } = product;

  return isSingleLoading ? (<h1 className="isLoading singleLoad"></h1>) : (
    <div className="single_product">
      <div className="box">
        <div className="heart">
          <Link to='/login'><i className="bi bi-heart"></i></Link>
        </div>

        <div className="box_flex">
          <div className="left_box">
            <img src={image?.url} alt="" />

            <div className="link">
              <p>SHARE THIS PRODUCT</p>
              <i className="bi bi-instagram" style={{ marginRight: '5px' }}></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>
          
          <div className="right_box">
            <div className="right_box_box">
              <h2>{name}</h2>

              <div className="rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
              </div>

              <div className="promo">
                <h4>Promo Sales</h4>
                <p>Starts on: 26 Jul, 10:00am</p>
              </div>

              <div className="price">
                <h3>{price?.formatted_with_symbol}</h3>
                <p>₦{price?.raw * 2}</p>
              </div>

              <div className="icon">
                <button onClick={() => {
                    handleAddToCart(product.id, 1);
                  }}><i
                  className="bi bi-cart-check-fill"></i> ADD TO CART</button>
              </div>

              <div className="promotion">
                <h4>PROMOTION</h4>
                <p><i className="bi bi-eyedropper"></i> Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</p>
                <p><i className="bi bi-bank"></i> Borrow loans up to N200,000 to make everyday life easier. No collateral, no paperwork via SneakerPay financial partners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="verified">
          <div className="verified_header">
            <h4>Verified Customer Feedback</h4>      
            <Link to='/login'><i className="bi bi-heart"></i></Link>
          </div>

          <h5>COMMENTS FROM VERIFIED PURCHASES(183)</h5>

          <div className="verified_box">
            <div className="rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            <h6>It is perfect</h6>

            <div className="info">
              <p>20-07-2022 by eke</p>
              <span><i className="bi bi-patch-check"></i>Verified Purchase</span>
            </div>
          </div>

          <div className="verified_box">
            <div className="rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </div>

            <h6>love it!</h6>

            <div className="info">
              <p>21-07-2022 by Liza</p>
              <span><i className="bi bi-patch-check"></i>Verified Purchase</span>
            </div>
          </div>

          <div className="verified_box">
            <div className="rating">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
            </div>

            <h6>My babe loves it</h6>

            <div className="info">
              <p>18-07-2022 by Abdullahi</p>
              <span><i className="bi bi-patch-check"></i>Verified Purchase</span>
            </div>
          </div>

          
        </div>

      <AddToCartLoad
        isAddToCartLoading={isAddToCartLoading}
        setIsAddToCartLoading={setIsAddToCartLoading}
      />
    </div>
  );
}

export default SingleProduct;
