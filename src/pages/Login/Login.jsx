import Button from "../../components/Button";
import shoe from "../../images/shoe-transparent-background.png";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <h4>Login</h4>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <div className="input_div input_div_one">
          <i className="bi bi-envelope-fill"></i>
          <Button text="LOGIN" color="#ff7d1a" />
        </div>
        <div className="input_div input_div_two">
          <i className="bi bi-messenger"></i>
          <Button text="LOGIN WITH FACEBOOK" color="#68707d" />
        </div>
      </div>

      <div className="right">
        <img src={shoe} alt="shoe" />
      </div>
    </div>
  );
};

export default Login;
