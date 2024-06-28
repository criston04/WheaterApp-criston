//funciona como un fecht de manera asincronica que permite 
import axios from 'axios';
export const ajax = async(options) => await axios.request(options).then( response => response.data);







