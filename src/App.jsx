import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/Weather";
import Forecast from "./components/Forecast";
import "./App.css";

function App({}) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (searchData) {
      const fetchWeatherData = async () => {
        try {
          const [currentWeatherResponse, forecastResponse] = await Promise.all([
            fetch(
              "https://api.openweathermap.org/data/2.5/weather?q={search}&appid={395b22df51a4c264230e093160dc365d}"
            ),
          
          ]);
          const currentWeatherData = await currentWeatherResponse.json();
          const forecastData = await forecastResponse.json();
          setCurrentWeather({ city: searchData.label, ...currentWeatherData });
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

