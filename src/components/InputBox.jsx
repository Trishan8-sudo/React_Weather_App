import './InputBox.css'
import { useState } from 'react'
import { fetchWeather } from "../services/weatherApi.js"

function InputBox() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [unit, setUnit] = useState("C")

  const handleSearch = async () => {
    setLoading(true)
    setError("")

    if (weather) {
      setHistory((prev) => [weather, ...prev])
    }

    setWeather(null)

    try {
      const data = await fetchWeather(city)

      const newWeather = {
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main
      }

      setWeather(newWeather)

    } catch (err) {
      setError("City not found")
    }

    setLoading(false)
  }

  return (
    <div className='main'>
      <div className="inputbox">
        <h2>Weather App</h2>

        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
            setError("")
          }}
        />

        <button onClick={handleSearch}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {weather && (
          <div>
            <h3>City: {weather.city}</h3>
            <p>
              Current Temperature:{" "}
              {unit === "C"
                ? weather.temp
                : (weather.temp * 9) / 5 + 32} °{unit}
            </p>
            <p>Condition: {weather.condition}</p>

            <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
              Toggle °C / °F
            </button>
          </div>
        )}
      </div>

      <div className="history">
        <h3>Search History</h3>

        {history.length === 0 ? (
          <div className="history-item empty">
            <p>No history</p>
          </div>
        ) : (
          history.map((item, index) => (
            <div key={index} className="history-item">
              <p><b>{item.city}</b></p>
              <p>
                {unit === "C"
                  ? item.temp
                  : (item.temp * 9) / 5 + 32} °{unit}
              </p>
              <p>{item.condition}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default InputBox