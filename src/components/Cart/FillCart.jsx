import Content from "./Content"

const FillCart = ({ cartList, cart, onDelete, onClear }) => {
  return (
    <div> 
        {cartList.map((cartItem) => <Content key={cartItem.id} cartItem={cartItem} onDelete={onDelete} />)}
        <button className="cart_btn">Checkout ({cart.subtotal.formatted_with_symbol})</button>
        <button className="cart_btn" onClick={() => onClear()}>Clear Cart</button>
    </div>
  )
}

export default FillCart