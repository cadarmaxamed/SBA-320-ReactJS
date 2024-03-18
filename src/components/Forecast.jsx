import React from "react";

function Forecast({ data }) {
  return (
    <div>
      <h2>5-Day Forecast for {data.city}</h2>
      {data.list.map((item, index) => (
        <div key={index}>
          <p>Date: {item.dt_txt}</p>
          <p>Temperature: {item.main.temp}°C</p>
          <p>Description: {item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
