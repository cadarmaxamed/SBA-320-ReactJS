import React from "react";

function currentWeather({ data }) {
  return (
    <div>
      <h2>Current Weather in {data.city}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Description: {data.weather[0].description}</p>
    </div>
  );
}

export default currentWeather;
