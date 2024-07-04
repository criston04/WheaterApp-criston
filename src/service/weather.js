import {ajax} from '../tools/ajax';

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather", // Cambia http por https
        params: {
            q: city,
            appid: "21e3195e9bfeb6879e788ec605b09ab0",
            units: "metric" // Grados centígrados
        }
    };
    return await ajax(optionsRequest);
}

export default getCityWeather