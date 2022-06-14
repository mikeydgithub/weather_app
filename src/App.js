
import './App.css';
import React, { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/weatherService';




export default function App() {

  const [query, setQuery] = useState({ q: 'berlin'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)


  
  useEffect(() => {
  const fetchWeather = async () => {
    await getFormattedWeatherData({...query, units}).then(
      (data) => {
        setWeather(data);
      });
  };

  // fetch new data
  fetchWeather();
  }, [query, units])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br 
    from bg-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400">
      <TopButtons/>
      <Inputs/>

      {weather && (
        <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather}/>
  
        <Forcast title="hourly forcast" items={weather.hourly}/>
        <Forcast title="daily forcast" items={weather.daily}/>
        </div>

      )}

    
    </div>
  )
}
