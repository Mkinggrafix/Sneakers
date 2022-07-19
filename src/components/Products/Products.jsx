import Product from "./Product/Product"

const Products = ({ products, handleAddToCart }) => {
  return (
    <div className="products">
      {products.map((product) => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)}
    </div>
  )
}

export default Products