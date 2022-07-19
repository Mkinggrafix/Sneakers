import C_Header from "./C_Header"
import CartContent from "./CartContent"

const Cart = ({ setShowCart, cartList, cart, onDelete, onClear }) => {
  return (
    <div className='cart'>
        <C_Header setShowCart={setShowCart} />
        <CartContent cartList={cartList} onDelete={onDelete} onClear={onClear} cart={cart} />
    </div>
  )
}

export default Cart