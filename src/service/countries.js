import {ajax} from '../tools/ajax';


export const getCountries = async () => {
  const optionRequest = {
    url: "https://restcountries.com/v3.1/all",
    method: "GET"
  };
  return await ajax(optionRequest);
}



export default getCountries
