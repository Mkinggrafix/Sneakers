import Item from "./Item"

const Items = ({ products, handleAddToCart }) => {
  return (
    <div className="products">
        {products.slice(10, 20) .map((product) => <Item key={product.id} product={product} handleAddToCart={handleAddToCart} />)}
    </div>
  )
}

export default Items