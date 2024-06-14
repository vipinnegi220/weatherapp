import React from "react";
import "./weather.css";
const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Please enter a city name to get weather information.</div>;
  }

  const { name, main, weather, cod } = weatherData;

  if (cod != 200) {
    // Fail early as soon as possible
    return (
      <div>
        <h2>data not found, please enter the correct city name.</h2>
      </div>
    );
  }

  const weatherCondition = weather[0].main.toLowerCase();

  return (
    <div className={`weather ${weatherCondition}`}>
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
      <div className="animation">
        {weatherCondition === "clear" && <div className="sun"></div>}
        {weatherCondition === "clouds" && <div className="cloud"></div>}
        {weatherCondition === "rain" && <div className="rain"></div>}
        {weatherCondition === "haze" && <div className="haze"></div>}
      </div>
    </div>
  );
};

export default Weather;
