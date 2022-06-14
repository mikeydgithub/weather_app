
import './App.css';
import React, { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './services/weatherService';




export default function App() {

  const [query, setQuery] = useState({q: 'berlin'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)


  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'london'});
    console.log(data)
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br 
    from bg-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400">
      <TopButtons/>
      <Inputs/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>

      <Forcast title="hourly forcast"/>
      <Forcast title="daily forcast"/>
    </div>
  )
}
