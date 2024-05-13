import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
const dayInWeek = new Date().getDate();
const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
  WEEK_DAYS.slice(0, dayInWeek)
);
console.log(forecastDays);
function Forecast({ data }) {
  return (
    <>
      <label>Günlük Hava Durumu</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`/icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {(item.weather[0].description).toUpperCase()}
                  </label>
                 
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                <div className="max-wrapper">
                    <label>Max - Min Sıcaklık : </label>
                    <label className="min-max">    
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C{" "}
                  </label>
                </div>
                <div>
                <label>Basınç : </label>
                    <label className="min-max">    
                    {Math.round(item.main.pressure)} hPa{" "}
                  </label>
                </div>
                <div>
                <label>Nem : </label>
                    <label className="min-max">    
                    {Math.round(item.main.humidity)}%{" "}
                  </label>
                </div>
                </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
