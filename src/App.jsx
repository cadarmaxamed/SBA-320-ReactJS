import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/currentWeather";
//import Forecast from "./components/Forecast";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  //const [forecast, setForecast] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    if (search) {
      const fetchWeatherData = async () => {
        try {
          const [currentWeatherResponse] = await Promise.all([
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=395b22df51a4c264230e093160dc365d`
            ),
          ]);

          const currentWeatherData = await currentWeatherResponse.json();
          //const forecastData = await forecastResponse.json();

          setCurrentWeather({ city: search, ...currentWeatherData });
        
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      };
      fetchWeatherData();
    }
  }, [search]);

  const handleOnSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <div className="container">
      <Search search={search} setSearch={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
