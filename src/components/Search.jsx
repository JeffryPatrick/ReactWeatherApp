import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { API_KEY } from "../api/api"

const Search = ({ setWeatherData }) => {

    const [input, setInput] = useState("");

    const [cityData, setCityData] = useState([]);

    const onChangeHandle = (cityName) => {
        setInput(cityName);
        fetchData(cityName);
    }

    const fetchData = async (value) => {
        try {
            if (value !== '') {
                const url = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=3&appid=${API_KEY}&units=metric`;
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setCityData(json)
            }
            else {
                setCityData([]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onCityClick = async (lat, lon) => {
        console.log(lat)
        console.log(lon)

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setWeatherData(json);
        setInput('');
        setCityData([]);
    }

    const onResetHandle = () => {
        setWeatherData(null);
    }

    return (
        <div className="search-component">
            <div className="input-wrapper">
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input
                    type="search"
                    value={input}
                    onChange={(e) => onChangeHandle(e.target.value)}
                    placeholder="Search City..."
                    className="city-input"
                />
                <button onClick={onResetHandle} className="reset-btn"><FontAwesomeIcon icon={faRotateRight} /></button>
            </div>
            {cityData.length !== 0 &&
                <ul className="city-list">
                    {
                        cityData.map((data, id) => (
                            <li
                                className="city-name"
                                key={id}
                                onClick={() => onCityClick(data.lat, data.lon)}
                            >
                                {data.name}
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
}

export default Search;