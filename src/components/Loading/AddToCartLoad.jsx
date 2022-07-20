const AddToCartLoad = ({ isAddToCartLoading }) => {
  return isAddToCartLoading ? (
    <h1>Adding...</h1>
  ) : (
    <h1 className="isAddToCart">Added to cart</h1>
  );
};

export default AddToCartLoad;
