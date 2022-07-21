import shoe from '../../images/shoe-transparent-background.png'

const About = () => {
  return (
    <div className="about">
        <div className="boxes">
            <div className="box">
                <div className="left special_img">
                    <img src={shoe} alt="shoe" />
                </div>
                <div className="right">
                    <h4>Sneakers</h4>
                    <p>Sneakers is your number one online sneakers shooping in Nigeria. We are online where you can purchase  all your foot wears as well as scandals, shoes, sneakers, boots for men, women and children. What more? You can have delivered directly to you.</p>
                </div>
            </div>
            <div className="box">
                <div className="right">
                    <h4>Our Story</h4>
                    <p className='margin_right'>Welcome to Sneakers. We take pride in delivering warm, friendly service.

                    Since 2022, we are the perfect place for shopping sneakers online, men, women and children, and bringing loved ones together. With affordable prices, discounts, we can cater for all foot wears.</p>
                </div>
                <div className="box_img">
                    <img src="https://media.istockphoto.com/photos/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-picture-id1320786676?b=1&k=20&m=1320786676&s=170667a&w=0&h=qKmwIvi7qq8RBNpFzZzifpfPcZl82xlq2whbMm4W-jE=" alt="" />
                </div>
            </div>
            <div className="box">
                <div className="box-img">
                    <img src='https://media.istockphoto.com/photos/womens-feet-in-sneakers-gym-training-in-sport-shoes-womans-white-on-picture-id1307717764?b=1&k=20&m=1307717764&s=170667a&w=0&h=tUVTxKfGpeeEH7jxwfPWmQG3DEJ63PhDU35QoKdG3Sw=' alt="shoe" />
                </div>
                <div className="right margin_left">
                    <h4>Our Mission</h4>
                    <p >Our mission is to put the body in motion with the most advanced footwear technology on the planet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About