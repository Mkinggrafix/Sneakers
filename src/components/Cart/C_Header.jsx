const C_Header = ({ setShowCart }) => {
  return (
    <div className='cart_header'>
        <h4>Cart</h4>
        <i onClick={() => {
          setShowCart(false);
        }} className="bi bi-x"></i>
    </div>
  )
}

export default C_Header