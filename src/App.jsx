import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/style.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { commerce } from "./lib/Commerce";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartList, setCartList] = useState([]);
  const [isAddToCartLoading, setIsAddToCartLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsCartLoading(false);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    console.log(cart)
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
    setIsAddToCartLoading(false);
  };

  const updateCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const onDelete = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const onClear = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
    setIsEmptyLoad(false)
  };

  useEffect(() => {
    setCartList(cart.line_items);
  }, [handleAddToCart]);

  return (
    <div className="App">
      <Router>
        <Header
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          cartItem={cart.total_items}
        />
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                handleAddToCart={handleAddToCart}
                isCartLoading={isCartLoading}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartList={cartList}
                updateCart={updateCart}
                cart={cart}
                onDelete={onDelete}
                onClear={onClear}
                isCartLoading={isCartLoading}
              />
            }
          />
          <Route
            path="/men"
            element={
              <Men 
                products={products} 
                handleAddToCart={handleAddToCart}
                isCartLoading={isCartLoading}
              />
            }
          />
          <Route
            path="/women"
            element={
              <Women 
                products={products} 
                handleAddToCart={handleAddToCart}
                isCartLoading={isCartLoading}
               />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={
            <SingleProduct 
              handleAddToCart={handleAddToCart}
              isAddToCartLoading={isAddToCartLoading}
              setIsAddToCartLoading={setIsAddToCartLoading}
              />} />
        </Routes>

        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
