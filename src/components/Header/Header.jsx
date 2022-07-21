import Logo from "./Logo";
import Nav from "./Nav";
import Avatar from "./Avatar";
import Media from "./Media";

const Header = ({
  showCart,
  setShowCart,
  showSideBar,
  setShowSideBar,
  cartItem,
}) => {
  return (
    <div className="header">
      <Logo />
      <Nav />
      <Avatar
        showCart={showCart}
        setShowCart={setShowCart}
        cartItem={cartItem}
      />
      <Media showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
};

export default Header;
