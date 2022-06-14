
import './App.css';
import React, { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function App() {

  const [query, setQuery] = useState({ q: 'berlin'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)


  
  useEffect(() => {
  const fetchWeather = async () => {

    const message = query.q ? query.q : 'current location.'

    toast.info('Fetching weather for ' + message)

    await getFormattedWeatherData({...query, units}).then(
      (data) => {

        toast.success(`Success fetched weather for ${data.name}, ${data.country}`)

        setWeather(data);
      });
  };

  // fetch new data
  fetchWeather();
  }, [query, units])

  const formatbackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshhold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshhold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br 
    from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400 ${formatbackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather}/>
  
        <Forcast title="hourly forcast" items={weather.hourly}/>
        <Forcast title="daily forcast" items={weather.daily}/>
        </div>
      )}
    <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    </div>
  )
}
