import axios from 'axios';

const API_KEY = '64c1a00a67a3f26d697bd33a255d0f4b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
 
export function fetchWeather (city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    };
}  
