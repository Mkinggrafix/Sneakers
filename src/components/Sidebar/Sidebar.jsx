import { Link } from 'react-router-dom'

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className={`sideBar ${showSideBar ? 'ModalOpen' : 'ModalClose'}`}>
        <i onClick={() => {
          setShowSideBar(false)
        }} className="bi bi-x"></i>
        <ul className='sideBar_links'>
          <li><Link to="/">Collections</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar