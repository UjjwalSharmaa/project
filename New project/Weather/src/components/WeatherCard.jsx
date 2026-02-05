import React from 'react'

const WeatherCard = ({weather}) => {

  console.log(weather);
  
  return (
    <div className='weather-section'>
      <div className="weather-card">
        <div className="weather-temp-c">
          {weather.current.temp_c} <sup>o</sup>
        </div>
        <div className="weather-info">
          {weather.current.humidity}
        </div>
      </div>
    </div>
  )
}

export default WeatherCard