//import React, { useEffect, useState } from 'react';
import react from 'react';

//import Search from '../components/Search';

// function Weather () {
//     return( <h1>Work Please</h1>);
    
// };
// export default Weather;
export default function Weather() {
    const [Search, setSearch] = useState("");
    const [loading, setLoading ]= useState(false);
    const [weatherData, setWeatherData] = useState(null);



 //getting the API to fetch the weather data
 async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q={search}&appid={395b22df51a4c264230e093160dc365d}"
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function handleSearch() {
    fetchWeatherData(Search);
  }
  function getWeatherData() {
    return new Date().toLocaleDateString('en-us', {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
  });
  }

  useEffect(() => {
    fetchWeatherData("Dubai");
  }, []);

  console.log(weatherData);

  return (
    <h1>React APP</h1>
  )
}