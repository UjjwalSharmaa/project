import React, { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'

const App = () => {
  const [weather, setWeather] = useState(null);
  return (
    <>
    <Header/>
    <Search setWeather ={setWeather}/>
    { weather && <WeatherCard weather={weather} /> }
    <Footer/>
    </>
  )
}

export default App