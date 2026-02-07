import Checkout from './Pages/Checkout'
import HomePage from './Pages/HomePage'
import Tracking from './Pages/Tracking'
import Orders from './Pages/Orders.jsx'
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="checkout" element={<Checkout />}/>
      <Route path="orders" element={<Orders />}/>
      <Route path="Tracking" element={<Tracking/>}/>
    </Routes>
  )
}

export default App
