import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import currentWeather from "./components/currentWeather";
import Forecast from "./components/Forecast";
import "./App.css";

function App({}) {
  const [currentweather, setcurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (searchData) {
      const fetchWeatherData = async () => {
        try {
          const [WeatherResponse, forecastResponse] = await Promise.all([
            fetch(
              "https://api.openweathermap.org/data/2.5/weather?q={search}&appid={395b22df51a4c264230e093160dc365d}"
            ),
          
          ]);
          const currentWeatherData = await WeatherResponse.json();
          const forecastData = await forecastResponse.json();
          setcurrentWeather({ city: searchData.label, ...currentWeatherData });
          setForecast({ city: searchData.label, ...forecastData });
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      };
      fetchWeatherData();
    }
  }, [searchData, apiKey1, apiKey2]);

  const handleOnSearchChange = (data) => {
    setSearchData(data);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;

