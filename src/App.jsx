import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/style.css';
import { Header, Footer, Cart, Sidebar, Newsletter, Home, About, Login, Contact, Men, Women } from './components'
import { commerce } from './lib/Commerce';

function App() {
    const [showCart, setShowCart] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})
    const [cartList, setCartList] = useState([])

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data)
  // }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  const handleAddToCart = async ( productId, quantity ) => {
    const { cart } = await commerce.cart.add(productId, quantity)

    setCart(cart)
  }

  const onDelete = async ( productId, quantity ) => {
    const { cart } = await commerce.cart.remove(productId, quantity)

    setCart(cart)
  }

  const onClear = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
  }

  useEffect(() => {
    setCartList(cart.line_items)
  }, [handleAddToCart])

  return (
    <div className="App">
      <Router>
        <Header showCart={showCart} 
        setShowCart={setShowCart} 
        showSideBar={showSideBar} 
        setShowSideBar={setShowSideBar} 
        cartItem={cart.total_items}  />

        {showCart && <Cart showCart={showCart} 
        setShowCart={setShowCart} 
        cartList={cartList} 
        cart={cart} 
        onDelete={onDelete}
        onClear={onClear} />}

        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

        
        <Routes>
          <Route path='/' element={<Home products={products} handleAddToCart={handleAddToCart} />} />
          <Route path='/men' element={<Men products={products} handleAddToCart={handleAddToCart} />} />
          <Route path='/women' element={<Women products={products} handleAddToCart={handleAddToCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        

        <Newsletter />
        <Footer />
      </Router>
    </div>
  )
}

export default App;