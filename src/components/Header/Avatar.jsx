import { Link } from 'react-router-dom'

const Avatar = ({ showCart, setShowCart, cartItem }) => {
  return (
    <div className='avatar'>
        <i className="bi bi-cart-check-fill" onClick={() => setShowCart(!showCart)}><button className="avatar_btn">{cartItem}</button></i>
        <Link to="/login"><i className="bi bi-person-circle"></i></Link>
    </div>
  )
}

export default Avatar