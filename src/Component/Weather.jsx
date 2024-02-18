import "./Weather.css"
import { useEffect, useState } from 'react';


const Wheather = () => {


    const [location, setLocation] = useState("New York");
    const [pressure, setPressure] = useState(1014);
    const [humidity, setHumidity] = useState(28);
    const [wind, setWind] = useState(4.37);
    const [maxtemp, setMaxtemp] = useState(26.86);
    const [mintemp, setMintemp] = useState(26.86);
    const [currenttemp, setCurrenttemp] = useState(26.86);
    const [icon, setIcon] = useState("01d");
    const [condition, setCondition] = useState("Clear");

    const key = "e6def2361e306af038f7d14898e5cf5d";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`


    const search = async () => {
        if (location === "") {
            setLocation("Cant search empty input field!");
        }
        else {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setMaxtemp(data.main.temp_max);
            setMintemp(data.main.temp_min);
            setCurrenttemp(data.main.temp);
            setIcon(data.weather[0].icon)
            setCondition(data.weather[0].description)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setMaxtemp(data.main.temp_max);
            setMintemp(data.main.temp_min);
            setCurrenttemp(data.main.temp);
            setIcon(data.weather[0].icon)
            setCondition(data.weather[0].description)
        }
        fetchData()
    }, [])



    return (
        <>

            <h1 className="heading">React Weather App</h1>
            <div className="searcharea">
                <input type="text" className="searchbar" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Enter the Location" />
                <button type="button" className="searchbtn" onClick={search}>Search</button>
            </div>


            <div className="main-container">


                <div className="parameters">
                    <div className="para">
                        <h3 className="pressure ">Pressure: </h3>
                        <p>{pressure} hPa</p>
                    </div>
                    <div className="para">
                        <h3 className="humidity ">Humidity: </h3>
                        <p>{humidity} %</p>
                    </div>
                    <div className="para">
                        <h3 className="wind ">Wind: </h3>
                        <p>{wind} m/s</p>
                    </div>
                    <div className="para">
                        <h3 className="maxtemp ">Max-Temp: </h3>
                        <p>{maxtemp} °C</p>
                    </div>
                    <div className="para">
                        <h3 className="mintemp">Min-Temp: </h3>
                        <p>{mintemp} °C</p>
                    </div>
                </div>

                <div className="weather">
                    <h3 className="current-temp">Temp: {currenttemp}°C</h3>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className="current-img" />
                    <p className="condition">Weather: {condition}</p>
                    <h3 className="location">Location: {location}</h3>
                </div>
            </div>
        </>
    );
}

export default Wheather;