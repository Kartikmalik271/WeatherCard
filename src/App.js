import {useState,useEffect} from 'react'
import './App.css';
import Main from './components/main';

function App() {
  //declaration of states
  const [city,setCity]=useState("mohali")
  const [tmp,setTmp]=useState([])
  
  const [bkcolor,setBkcolor]=useState("linear-gradient(130deg,#ffffff,#ffffff)")

  //fetching data form api
  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=6930891197bfc4266ba6b989393f57be`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTmp(data)
        if (data.list[0].main.temp>40){
          setBkcolor("linear-gradient(130deg,#ed7117, #ed7014)")
        }
        else if (data.list[0].main.temp>25){
          setBkcolor("linear-gradient(130deg,#ff781f,#ffba49)")
        }
        else if (data.list[0].main.temp>10){
          setBkcolor("linear-gradient(130deg,#008dc0,#4e97d1")          
        }
        else if (data.list[0].main.temp<10){
            setBkcolor("linear-gradient(130deg,#004f92,#008dc0)")
          }
      })  
  }

  //handling search request
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }
  useEffect(() => {
    fetchData()    
  }, [])
  
  return (
    <div className="App " style={{background:bkcolor,color:"whitesmoke"}}>
      <form className='Form col-12 col-md-4 pt-5 '>
        <div className='row justify-content-center'>
          <input type="text" className="form-input col-7 mt-3 p-2"value={city} onChange={(e)=>setCity(e.target.value)}/>
          <button type="submit" className="btn-secondary search-btn col-6 mt-1" onClick={handleSubmit}>search</button>
        </div>
        
      </form>
    {
      Object.keys(tmp).length>1 ? 
        Object.keys(tmp).length>2 ? 
            <><Main data={tmp} city={city} /></>
          :
            <h3 style={{textAlign:"center"}}>"INVALID REQUEST"</h3>
        : 
          <h3 style={{textAlign:"center",color:"black"}}>LOADING!!!!</h3>
    }
    </div>
    
  );
}

export default App;
