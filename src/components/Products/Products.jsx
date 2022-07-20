import Product from "./Product/Product";

const Products = ({ products, handleAddToCart, isCartLoading, isAddToCartLoading, setIsAddToCartLoading }) => {
  return isCartLoading ? (<div className="isLoading"></div>) : (<div className="products">
    {products.map((product) => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} isAddToCartLoading={isAddToCartLoading} setIsAddToCartLoading={setIsAddToCartLoading} />)}
  </div>)
}

export default Products