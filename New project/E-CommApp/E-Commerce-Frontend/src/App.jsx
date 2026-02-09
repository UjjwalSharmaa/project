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
      <Route path="tracking" element={<Tracking/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
  )
}

export default App
