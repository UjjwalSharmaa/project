import Checkout from './Pages/Checkout'
import HomePage from './Pages/HomePage'
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="checkout" element={<Checkout />}/>
    </Routes>
  )
}

export default App
