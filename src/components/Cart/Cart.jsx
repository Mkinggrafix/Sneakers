import CartContent from "./CartContent"

const Cart = ({ cart, cartList, onDelete, onClear, updateCart }) => {
  return (
    <div className='home'>
      <h3>Your Shopping Cart</h3>
      <div className="products">
          {cartList.map((cartItem) => <CartContent key={cartItem.id} cartItem={cartItem} cart={cart} onDelete={onDelete} onClear={onClear} updateCart={updateCart} />)}
      </div>
      <div className="products_buttons" style={productStyle}>
              <p style={{marginTop: '.5rem'}}>Subtotal: {cart.subtotal.formatted_with_symbol}</p>

              <div className="product_product_buttons">
                <button style={buttonStyle} onClick={() => onClear()}>EMPTY CART</button>
                <button style={buttonStyle} onClick={() => onClear()}>CHECKOUT</button>
              </div>
          </div>
    </div>
  )
}

let productStyle= {
  display: 'flex', 
  justifyContent: 'space-between',
  marginTop: '1rem',
  marginBottom: '2rem'
}

let buttonStyle ={
  backgroundColor: 'red', 
  borderRadius: '5px',
  fontSize: '.8rem',
  marginRight: '5px',
  marginTop: '.5rem',
}

export default Cart