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
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData ('weather', searchParams).then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather

    const formmatedForecastWeather = await getWeatherData('onecall', {
    lat, lon, exclude: 'current, minutley, alerts', units: searchParams.units
    })

    return formattedCurrentWeather;
}

export default getFormattedWeatherData;