const AddToCartLoad = ({ isAddToCartLoading }) => {
  return isAddToCartLoading ? (<h1></h1>) : (<h1 className="isAddToCart">Add to cart</h1>)
}

export default AddToCartLoad