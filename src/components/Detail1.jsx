import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Detail1 = ({ weatherData }) => {

    const coord = weatherData.coord;
    const main = weatherData.main;
    const weather = weatherData.weather;
    const iconUrl = `https://openweathermap.org/img/wn/${weather != null && weather[0].icon}@2x.png`

    return (
        <div className="details">
            <div className="location-temp">
                <div className="location-section">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="location">{weatherData.name != null ? weatherData.name : "--"}</p>
                </div>
                <p className="lat-lon">
                    {coord != null ? coord.lat : "--"} &nbsp;&nbsp;
                    {coord != null ? coord.lon : "--"}
                </p>
                <img
                    src={iconUrl}
                    alt={weather != null && weather[0].description}
                    className="weather-icon"
                />
                <p className="temperature">
                    {main != null ? Math.floor(main.temp) : "--"}&deg;<sup>C</sup>
                </p>
                <p className="description">
                    {weather != null ? weather[0].main + ", " + weather[0].description : "--"}
                </p>
            </div>
        </div>
    );
}

export default Detail1;