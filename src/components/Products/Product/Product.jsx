const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product">
        <div className="box">
          <img src={product.image.url} alt="" />
          <div className="box_content">
            <div className="box_content_content">
              <h4>{product.name}</h4>
              <p>{product.price.formatted_with_symbol}</p>
            </div>
            <div className="icon">
              <i className="bi bi-cart-check-fill" onClick={() => handleAddToCart(product.id, 1)}></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product