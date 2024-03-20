import React from "react";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [WeatherData, setWeatherData] = useState(null);
  
  // Function to fetch weather data
async function fetchWeatherData(param) {
  setLoading(true)
  const url = "https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=395b22df51a4c264230e093160dc365d";
  
  
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error.message);
      return null;
  }
}

// Example usage
const city = '';
const state = '';
const country = '';
const apiKey = '395b22df51a4c264230e093160dc365d';

fetchWeatherData(city, state, country, apiKey)
  .then(weatherData => {
      if (weatherData) {
          console.log(weatherData);
      } else {
          console.log('Failed to fetch weather data');
      }
  })
  .catch(error => {
      console.error('Error:', error.message);
  });

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  console.log(WeatherData);

  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
  
    {loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <div>
        <div className="city-name">
          <h2>
            {currentWeatherData?.name}, <span>{currentWeatherData?.sys?.country}</span>
          </h2>
        </div>
        <div className="date">
          <span>{getCurrentDate()}</span>
        </div>
        <div className="temp">{currentWeatherData?.main?.temp}</div>
        <p className="description">
          {currentWeatherData && currentWeatherData.weather && currentWeatherData.weather[0]
            ? currentWeatherData.weather[0].description
            : ""}
        </p>
        <div className="weather-info">
          <div className="column">
            <div>
              <p className="wind">{currentWeatherData?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>
          </div>
          <div className="column">
            <div>
              <p className="humidity">{currentWeatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};
 