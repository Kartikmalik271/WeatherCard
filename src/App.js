import React,{useEffect , useState} from 'react';

import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const[city,setCity]=useState('Delhi');
  const[temp,setTemp]=useState('');
  const[condition,setCondition]=useState('');
  const[country,setCountry]=useState('');
  const data= async()=>{
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6930891197bfc4266ba6b989393f57be`
      );
      const resJSON= await apiRes.json();
      return resJSON;
  };
  
  const handleSearch=(e)=>{
    e.preventDefault();
    data().then(res=> {
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
    });
  };
  useEffect(()=>{
    data().then(res=> {
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
    });
  },[]);
  return (
    <div>
    <div className="App">
    <WeatherCard temp={temp} condition={condition} city={city} country={country}/><br></br>
    
   <from>
     <input 
     id='search'
     value={city} onChange={(e)=>setCity(e.target.value)}
     /><br></br>
     <button class='btn btn-full' onClick={e=>handleSearch(e )}>search</button>
   </from>
    </div>
    </div>
  );
}

export default App;
