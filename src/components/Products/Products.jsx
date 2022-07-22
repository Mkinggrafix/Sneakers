import Product from "./Product/Product";

const Products = ({
  products,
  isCartLoading,
  isAddToCartLoading,
  setIsAddToCartLoading,
}) => {
  return isCartLoading ? (
    <div className="isLoading"></div>
  ) : (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          isAddToCartLoading={isAddToCartLoading}
          setIsAddToCartLoading={setIsAddToCartLoading}
        />
      ))}
    </div>
  );
};

export default Products;
