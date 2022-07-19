import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const Newsletter = ({setShowAvatar}) => {
  return (
    <div className="newsletter">
        <div className="boxes">
          <div className="box">
            <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>
          <div className="box">
            <h4>NEW TO SNEAKERS?</h4>
            <p>Subscribe to our newsletter to get updates on our latest offer?</p>
            <div className="newsletter_input">
              <input type="email" placeholder='Enter Email' className='input' />
              <input type="submit" value="Subscribe" className='newsletter_btn' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Newsletter