import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city"> {data.city}</p>
                <p className="weather-desc"> {data.weather[0].description} </p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
            </div>
            <div className ="mid">
                <p className="temperature"> {Math.round(data.main.temp)}°C</p>       
                <span className="feelslike-label"> Feels Like</span>
                <span className="temperature feels"> {Math.round(data.main.feels_like)}°C</span>            
            </div>
            <div className="bottem">
                <div className="details">
                    <div className="p-row">
                        <span className="p-label"> Wind</span>
                        <span className="p-value"> {data.wind.speed} m/s</span>
                    </div>
                    <div className="p-row">
                        <span className="p-label"> Humidity</span>
                        <span className="p-value"> {data.main.humidity}%</span>
                    </div>
                    <div className="p-row">
                        <span className="p-label"> pressure</span>
                        <span className="p-value"> {data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;