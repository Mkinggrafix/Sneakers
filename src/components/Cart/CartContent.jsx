import Button from "../Button"

const CartContent = ({ cart, cartItem, onDelete, updateCart }) => {
  return (
    <div className="product">
        <div className="box">
            <img src={cartItem.image.url} alt="" />
            <div className="box_content">
                <div className="box_content_content">
                    <h4>{cartItem.name}</h4>
                    <p>{cartItem.line_total.formatted_with_symbol}</p>
                </div>
            <div className="operation" style={ operationStyle }>
              <div style={operaStyle}>
                <i className="bi bi-dash" onClick={() => updateCart(cartItem.id, cartItem.quantity - 1)}></i>
                <p>{cartItem.quantity}</p>
                <i className="bi bi-plus" onClick={() => updateCart(cartItem.id, cartItem.quantity + 1)}></i>
              </div>

              <div className="icon_button">
                <button style={buttonStyle} onClick={() => onDelete(cartItem.id, cartItem.quantity)}>REMOVE</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

let operationStyle = {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000',
    fontWeight: 'bold',
    marginTop: '1rem',
    marginBottom: '1rem'
}

let operaStyle= {
    display: 'flex', 
    alignItems: 'center',
    letterSpacing: '5px'
}

let buttonStyle ={
    backgroundColor: 'red', 
    borderRadius: '5px',
    fontSize: '.8rem',
    padding: '7px'
  }

export default CartContent