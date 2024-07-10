import {ajax} from '../tools/ajax';

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather", // Cambia http por https
        params: {
            q: city,
            appid: "67d44c4765a2e43d077a024605351577",
            units: "metric" // Grados centígrados
        }
    };
    return await ajax(optionsRequest);
}

export default getCityWeather