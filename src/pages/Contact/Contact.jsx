import Button from "../../components/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="box">
        <h4>Get in touch!</h4>
        <p>Any question or remarks? Just write us a message.</p>
      </div>

      <div className="mobile_box">
        <ul>
          <li>
            <i className="bi bi-phone-vibrate"></i>
            <span>09036190420</span>
          </li>
          <li>
            <i className="bi bi-envelope-fill"></i>
            <span>codeboyfriend@gmail.com</span>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i>
            <span>Ibadan, Nigeria</span>
          </li>
        </ul>
      </div>

      <div className="box_grid">
        <div className="box_grid_left">
          <h4>Contact Information</h4>
          <p>
            fill up the form and our team will get back to you within 24 hours.
          </p>

          <ul>
            <li>
              <i className="bi bi-phone-vibrate"></i>
              <span>09036190420</span>
            </li>
            <li>
              <i className="bi bi-envelope-fill"></i>
              <span>codeboyfriend@gmail.com</span>
            </li>
            <li>
              <i className="bi bi-geo-alt-fill"></i>
              <span>Ibadan, Nigeria</span>
            </li>
          </ul>

          <ul className="links">
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
          </ul>
        </div>

        <div className="box_grid_right">
          <div className="grid_input">
            <div>
              <label>First name</label>
              <input type="text" />
            </div>

            <div>
              <label>Last name</label>
              <input type="text" />
            </div>

            <div>
              <label>Mail</label>
              <input type="email" />
            </div>

            <div>
              <label>Phone number</label>
              <input type="number" />
            </div>
          </div>

          <div className="msg">
            <label>Message</label>
            <input type="text" />
          </div>

          <Button text="Send Message" color="#1d2025" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
