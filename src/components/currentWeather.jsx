import React from "react";

// // export default currentWeather;
// import { useEffect, useState } from "react";
// import Search from "./Search";

// export default function currentWeather() {
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [currentWeatherData, setcurrentWeatherData] = useState(null);

//   async function fetchWeatherData(param) {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q={params}APPID=395b22df51a4c264230e093160dc365d"
//       );

//       const data = await response.json();
//       if (data) {
//         setcurrentWeatherData(data);
//         setLoading(false);
//       }
//     } catch (e) {
//       setLoading(false);
//       console.log(e);
//     }
//   }

//   async function handleSearch() {
//     fetchcurrentWeatherData(search);
//   }

//   function getCurrentDate() {
//     return new Date().toLocaleDateString("en-us", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });
//   }

//   useEffect(() => {
//     fetchcurrentWeatherData("bangalore");
//   }, []);

//   console.log(currentWeatherData);

//   return (
//     <div>
//       <Search
//         search={search}
//         setSearch={setSearch}
//         handleSearch={handleSearch}
//       />
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div>
//           <div className="city-name">
//             <h2>
//               {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
//             </h2>
//           </div>
//           <div className="date">
//             <span>{getCurrentDate()}</span>
//           </div>
//           <div className="temp">{weatherData?.main?.temp}</div>
//           <p className="description">
//             {weatherData && weatherData.weather && weatherData.weather[0]
//               ? weatherData.weather[0].description
//               : ""}
//           </p>
//           <div className="weather-info">
//             <div className="column">
//               <div>
//                 <p className="wind">{weatherData?.wind?.speed}</p>
//                 <p>Wind Speed</p>
//               </div>
//             </div>
//             <div className="column">
//               <div>
//                 <p className="humidity">{weatherData?.main?.humidity}%</p>
//                 <p>Humidity</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import Search from "./Search";

export default function CurrentWeather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&APPID=395b22df51a4c264230e093160dc365d`
      );

      const data = await response.json();
      if (data) {
        setCurrentWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  console.log(currentWeatherData);

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
 