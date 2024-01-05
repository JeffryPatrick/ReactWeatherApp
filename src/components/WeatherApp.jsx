import React, { useState } from "react";
import TimeDate from "./TimeDate";
import Search from "./Search";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";
import Detail3 from "./Detail3";

const WeatherApp = () => {

    const [weatherData, setWeatherData] = useState(null);

    return (
        <div>
            <div className="section-1">
                <TimeDate />
                <Search setWeatherData={setWeatherData} />
            </div>
            {
                weatherData != null &&
                <div className="section-2">
                    <Detail2 weatherData={weatherData} />
                    <Detail1 weatherData={weatherData} />
                    <Detail3 weatherData={weatherData} />
                </div>
            }
        </div>
    );
}

export default WeatherApp;