import { DateTime } from "luxon";

const API_KEY = 'cc2b66d36c81d504c773f0a3f2ccc4d6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    const res = await fetch(url);
    return await res.json();
    
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, country, sunrise, sunset, details, icon, speed}
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    return {timezone, daily, hourly};
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData (
        'weather', 
        searchParams
        ).then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather

    const formatedForecastWeather = await getWeatherData('onecall', 
    {
        lat, 
        lon, 
        exclude: 'current, minutley, alerts', 
        units: searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formatedForecastWeather};
};

const formatToLocalTime = (secs, 
    zone, 
    format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};