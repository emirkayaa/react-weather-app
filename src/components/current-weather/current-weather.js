import "./current-weather.css";

function CurrentWeather({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img src={`/icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="tempature">{Math.round(data.main.temp) }°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Detay</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Hissedilen</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Rüzgar</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Nem</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
