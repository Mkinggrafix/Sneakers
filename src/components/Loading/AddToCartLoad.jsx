const AddToCartLoad = ({ isAddToCartLoading, setIsAddToCartLoading }) => {
  return isAddToCartLoading ? (
    <h1></h1>
  ) : (
    <div className="isAddToCart">
      <h1>Added to cart</h1>
      <i onClick={() => setIsAddToCartLoading(true)} className="bi bi-x"></i>
    </div>
  );
};

export default AddToCartLoad;
