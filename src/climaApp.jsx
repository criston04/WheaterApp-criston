import {useEffect, useState} from "react";
import {getCountries} from "./service/countries";
import { getCities } from "./service/cities";
import { getCityWeather } from "./service/weather";

export const WheaterApp = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
       setCountries(await getCountries());
    })();
 }, []);

 const countryHandler = async e => {
  e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
  setWeather(null);
  }
  const cityHandler = async e => e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));
  return (
    <>
      <h1>WEATHER APP</h1>
      <div>
      <label>elige un pais</label><br />
      <select onChange={countryHandler}><br />
        <option>Seleciona el pais</option>
       {countries.map(country => <option key={country.cca2} value={country.cca2}>{country.name.common}</option>)}
      </select>
      </div>

      {cities.length > 0 && (
            <div>
               <label>Elige una ciudad:</label><br />
               <select onChange={cityHandler}><br />
                  <option value="">Selecciona la ciudad</option>
                  {cities.map(city => <option key={city.id}>{city.name}</option>)}
               </select>
            </div>
      )}
      {weather && (
            <div>
               <h2>Temperatura actual: {weather.main.temp}º</h2>
               <p>Minimo: {weather.main.temp_min.toFixed()}°</p>
               <p>Maximo: {weather.main.temp_max.toFixed()}°</p>
               <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            </div>
      )}
      
    </>
    

  )
}

export default WheaterApp
