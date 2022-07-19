import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="boxes">
            <div className="box">
                <h4>LET US HELP YOU</h4>

                <ul>
                    <li>Help Center</li>
                    <li>How to shop on Sneakers?</li>
                    <li>Report a Product</li>
                    <li>Dispute Resolution Policy</li>
                </ul>
            </div>

            <div className="box">
                <h4>LINKS</h4>

                <ul>
                    <li><Link to="/">Collections</Link></li>
                    <li><Link to="/men">Men</Link></li>
                    <li><Link to="/women">Women</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="box">
                <h4>MAKE MONEY WITH SNEAKERS</h4>

                <ul>
                    <li>Sell on Sneakers</li>
                    <li>Become a Slaes Consultant</li>
                    <li>Become a Sneakers Vendor</li>
                    <li>Join Sneakers DA Academy</li>
                </ul>
            </div>
        </div>

        <div className="social_links">
            <h4>JOIN US ON</h4>

            <ul>
                <li><i className="bi bi-facebook"></i></li>
                <li><i className="bi bi-twitter"></i></li>
                <li><i className="bi bi-youtube"></i></li>
                <li><i className="bi bi-instagram"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer