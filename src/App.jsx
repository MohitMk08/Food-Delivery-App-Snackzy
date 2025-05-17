
import Navbar from './components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/home'
import Cart from './pages/CartPage/cart'
import PlaceOrder from './pages/Place-Order-Page/place-order'
import Footer from './components/Footer/Footer'
import Login from './components/Login-Popup/Login'
import { useState } from 'react'


function App() {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
