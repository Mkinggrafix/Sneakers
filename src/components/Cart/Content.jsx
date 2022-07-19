const Content = ({ cartItem, onDelete }) => {
  return (
    <div className='content'>
        <ul>
            <li>
              <img src={cartItem.image.url} alt="" />
              <p className="item_name">{cartItem.name}</p>
              <p>{cartItem.quantity}</p>
              <span onClick={() => onDelete(cartItem.id, cartItem.quantity - 1) }><i className="bi bi-trash"></i></span>
            </li>
        </ul>
    </div>
  )
}

export default Content