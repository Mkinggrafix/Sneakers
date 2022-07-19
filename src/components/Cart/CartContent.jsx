import FillCart from "./FillCart"

const CartContent = ({ onDelete, onClear, cartList, cart }) => {
  return (
    <div className="cart_content">
        {cartList.length > 0 ? 
          <FillCart cartList={cartList} cart={cart} onDelete={onDelete} onClear={onClear} /> : 
          <h3>Your cart is empty</h3>
        }
    </div>
  )
}

export default CartContent