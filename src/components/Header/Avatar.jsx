import { Link } from 'react-router-dom'

const Avatar = ({ cartItem }) => {
  return (
    <div className='avatar'>
      <Link to='/cart'><i className="bi bi-cart-check-fill"><button className="avatar_btn">{cartItem}</button></i></Link>
      <Link to="/login"><i className="bi bi-person-circle"></i></Link>
    </div>
  )
}

export default Avatar