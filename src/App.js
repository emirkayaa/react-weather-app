import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import { WEATHER_API } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecast] = useState(null);

  const handleOnChangeSearch = (searchData) => {
    const [lat, log] = searchData.value.split(" ");
    const api = "9a2dbe8a3d62abfe161914844aebbbc9";
    const currentWeatherFetch = fetch(
      `${WEATHER_API}/weather?lat=${lat}&lon=${log}&appid=${api}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API}/forecast?lat=${lat}&lon=${log}&appid=${api}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

        console.log(currentWeather);
        console.log(forecastWeather);
      })
      .catch((err) => console.log(err));

  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnChangeSearch} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast  data={forecastWeather}/>}
    </div>
  );
}

export default App;
