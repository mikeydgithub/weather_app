const API_KEY = 'cc2b66d36c81d504c773f0a3f2ccc4d6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

// 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType)
}