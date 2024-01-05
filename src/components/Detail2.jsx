import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters, faTemperatureLow, faDroplet, faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";

const Detail2 = ({ weatherData }) => {

    const main = weatherData.main;

    return (
        <div className="details">
            <div className="inner-section">
                <div className="feels-like">
                    <p className="value">
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        &nbsp;&nbsp;
                        {main != null ? Math.floor(main.feels_like) : '--'}&deg;C
                    </p>
                    <p className="label">Feels like</p>
                </div>
                <div className="same-blck">
                    <div>
                        <p className="value">
                            <FontAwesomeIcon icon={faTemperatureLow} />
                            &nbsp;&nbsp;
                            {main != null ? Math.floor(main.temp_min) : '--'}&deg;C
                        </p>
                        <p className="label">Min</p>
                    </div>
                    <div>
                        <p className="value">
                            <FontAwesomeIcon icon={faTemperatureHigh} />
                            &nbsp;&nbsp;
                            {main != null ? Math.floor(main.temp_max) : '--'}&deg;C
                        </p>
                        <p className="label">Max</p>
                    </div>
                </div>
                <div className="humidity">
                    <p className="value">
                        <FontAwesomeIcon icon={faDroplet} />
                        &nbsp;&nbsp;
                        {main != null ? main.humidity : '--'}
                    </p>
                    <p className="label">Humidity</p>
                </div>
                <div className="pressure">
                    <p className="value">
                        {main != null ? main.pressure : '--'}
                        &nbsp;&nbsp;
                        hPa
                    </p>
                    <p className="label">Pressure</p>
                </div>
                <div className="ground-lvl">
                    <p className="value">
                        {
                            main != null && 'grnd_level' in main
                                ? main.grnd_level
                                : '--'
                        }
                        &nbsp;&nbsp;
                        lvl
                    </p>
                    <p className="label">Ground Level</p>
                </div>
            </div>
        </div>
    );
}

export default Detail2;