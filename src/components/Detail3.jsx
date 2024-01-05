import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCompass, faMoon, faWind, faSmog, faEye } from "@fortawesome/free-solid-svg-icons";

const Detail3 = ({ weatherData }) => {

    const sys = weatherData.sys
    const wind = weatherData.wind

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function convertMsToHM(milliseconds, formatTime) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        seconds = seconds % 60;

        minutes = seconds >= 30 ? minutes + 1 : minutes;

        minutes = minutes % 60;

        hours = hours % formatTime;

        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    }

    return (
        <div className="details">
            <div className="inner-section">
                <div className="same-blck">
                    <div>
                        <p className="value">
                            <FontAwesomeIcon icon={faSun} />
                            &nbsp;&nbsp;
                            {sys != null ? convertMsToHM(sys.sunrise, 12) : '--'}
                        </p>
                        <p className="label">SunRise</p>
                    </div>
                    <div>
                        <p className="value">
                            <FontAwesomeIcon icon={faMoon} />
                            &nbsp;&nbsp;
                            {sys != null ? convertMsToHM(sys.sunset, 24) : '--'}
                        </p>
                        <p className="label">SunSet</p>
                    </div>
                </div>
                <div>
                    <p className="value">
                        <FontAwesomeIcon icon={faWind} />
                        &nbsp;&nbsp;
                        {wind != null ? wind.speed : '--'}
                    </p>
                    <p className="label">Wind</p>
                </div>
                <div>
                    <p className="value">
                        <FontAwesomeIcon icon={faCompass} />
                        &nbsp;&nbsp;
                        {wind != null ? wind.deg : '--'}
                    </p>
                    <p className="label">Degree</p>
                </div>
                <div>
                    <p className="value">
                        <FontAwesomeIcon icon={faSmog} />
                        &nbsp;&nbsp;
                        {wind != null && 'gust' in wind ? wind.gust : '--'}
                    </p>
                    <p className="label">Gusts</p>
                </div>
                <div>
                    <p className="value">
                        <FontAwesomeIcon icon={faEye} />
                        &nbsp;
                        {weatherData.visibility != null ? weatherData.visibility : "--"}
                    </p>
                    <p className="label">Visibility</p>
                </div>
            </div>
        </div>
    );
}

export default Detail3;