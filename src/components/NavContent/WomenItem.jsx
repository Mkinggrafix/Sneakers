import Item from "./Item"

const WomenItem = ({ 
  products, 
  handleAddToCart, 
  isCartLoading 
}) => {
  return isCartLoading ? (
  <div className="isLoading"></div>
  ) : (
    <div className="products">
      {products.slice(5, 15) 
        .map((product) => (<Item 
        key={product.id} 
        product={product} 
        handleAddToCart={handleAddToCart} 
     />))}
    </div>
  )
}

export default WomenItem