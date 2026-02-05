import React, { useState } from 'react'
import axios from 'axios'

function Search({ setWeather }) {
  const [search, setSearch] = useState('')

  function handleInput(e) {
    setWeather(null)
    setSearch(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {

      const options = {
        method: 'GET',
        url: 'https://weather-com.p.rapidapi.com/v3/wx/forecast/daily/3day',
        params: {
          geocode: '34.080911,-118.270406',
          units: 'e',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'weather-com.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        setWeather(response.data)
      }).catch(function (error) {
        alert('Please enter a valid city name')
        console.error(error);
      });

    }
  }

  return (
    <div className='search-section'>
      <div className="search-container">
        <svg
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input type="text" placeholder="Search for a city" onChange={handleInput} onKeyDown={handleKeyDown} />
      </div>
    </div>
  )
}

export default Search