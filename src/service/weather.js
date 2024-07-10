import {ajax} from '../tools/ajax';

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather", // Cambia http por https api.openweathermap.org/data/2.5/weather
        params: {
            q: city,
            appid: "ecaf3c4512ad13174cc8f83cb0a863c3",
            units: "metric" // Grados centígrados
        }
    };
    return await ajax(optionsRequest);
}

export default getCityWeather