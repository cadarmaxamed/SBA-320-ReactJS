//export default App;
import React,{ useState, useEffect } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/currentWeather";
import Forecast from "./components/Forecast";
import "./App.css";

function App({}) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState(null);
  //const [searchData, setSearchData] = useEffect(null);
 
  useEffect(() => {
    if (search) {
      const fetchWeatherData = async () => {
        try {
          const [currentWeatherResponse, forecastResponse] = await Promise.all([
            fetch(
              `${API_URL}/weather?q=${search}&APPID=395b22df51a4c264230e093160dc365d`
            ),
            fetch(
              `${API_URL}/forecast?q=${search}&APPID=395b22df51a4c264230e093160dc365d`
            )
          ]);

          const currentWeatherData = await currentWeatherResponse.json();
          const forecastData = await forecastResponse.json();
          const search = await searchResponse.json();
          

          setCurrentWeather({ city: search.label, ...currentWeatherData });
          setForecast({ city: search.label, ...forecastData });
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      };
      fetchWeatherData();
    }
  }, [search]);

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
