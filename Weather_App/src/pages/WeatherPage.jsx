import React, { useState } from 'react';
import axios from 'axios';

function WeatherPage() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '6d52164c59c33ed19cc500a3280a52a0'; 

  const getWeather = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setData(null);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setData(res.data);
    } catch (err) {
      setError('City not found or API error');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">Search Weather</h2>

      <form onSubmit={getWeather} className="input-group mb-4 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      {error && <p className="text-danger text-center">{error}</p>}

      {data && (
        <div className="card mx-auto shadow" style={{ maxWidth: '500px' }}>
          <div className="card-body text-center">
            <h3>{data.name}, {data.sys.country}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
            <h4>{data.main.temp}°C</h4>
            <p className="text-capitalize">{data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind: {data.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
