import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/style.css";
import {
  Header,
  Footer,
  Cart,
  Sidebar,
  Newsletter,
  Home,
  About,
  Login,
  Contact,
  Men,
  Women,
} from "./components";
import { commerce } from "./lib/Commerce";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartList, setCartList] = useState([]);
  const [isAddToCartLoading, setIsAddToCartLoading] = useState(true);
  const [deleteLoad, setdeleteLoad] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsCartLoading(false);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
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
                isAddToCartLoading={isAddToCartLoading}
                setIsAddToCartLoading={setIsAddToCartLoading}
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
              />
            }
          />
          <Route
            path="/men"
            element={
              <Men products={products} handleAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/women"
            element={
              <Women products={products} handleAddToCart={handleAddToCart} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>

        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
