import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <ul className='nav_links'>
            <li><Link to="/">Collections</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav