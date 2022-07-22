import Item from "./Item"

const Items = ({ 
  products, 
  handleAddToCart, 
  isCartLoading 
}) => {
  return isCartLoading ? (
  <div className="isLoading"></div>
  ) : (
    <div className="products">
      {products.slice(10, 20) 
      .map((product) => (
      <Item 
        key={product.id} 
        product={product} 
        handleAddToCart={handleAddToCart} 
      />))}
    </div>
  )
}

export default Items