import React from 'react'
import clouds from '../assets/img/Mostly Cloudy-4x.png'
import fog from '../assets/img/Fog-4x.png'
import thunder from'../assets/img/Severe Thunderstorm-4x.png'
import drizz from'../assets/img/Drizzle-3x.png'
import rain from'../assets/img/Rain-4x.png'
import snow from'../assets/img/Snow-4x.png'
import dust from'../assets/img/Dust-4x.png'
import tornado from'../assets/img/Tornado-4x.png'
import hail from'../assets/img/Hail-4x.png'
import haze from'../assets/img/Haze-4x.png'
import Sunny from'../assets/img/Mostly Sunny-4x.png'
import Graphs from './graphs'

const Main = (props) => {
    const date = new Date();
    let icon=''
    let day = date.getDate();
    let month = date.getMonth() + 1;
    console.log(month);
    let mth=''
    switch(month) {
        case 0:
            mth="jan"
            break;
        case 1:
            mth="feb"
            break;
        case 2:
            mth="mar"
            break;
        case 3:
            mth="apr"
            break;
        case 4:
            mth="may"
            break;
        case 5:
            mth="june"
            break;
        case 6:
            mth="july"
            break;
        case 7:
            mth="aug"
            break;
        case 8:
            mth="sept"
            break;
        case 9:
            mth="oct"
            break;
        case 10:
            mth="nov"
            break;
        case 11:
            mth="dec"
            break;
        default:
          // code block
      }
      switch (props.data.list[0].weather[0].main) {
        case "Clouds":
          icon = clouds;
          break;
        case "Clear":
          icon = Sunny;
          break;
        case "Haze":
          icon = haze;
          break;
        case "Hail":
          icon = hail;
          break;
        case "Fog":
          icon = fog;
          break;
        case "Tornado":
          icon = tornado;
          break;
        case "Dust":
          icon = dust;
          break;
        case "Snow":
          icon = snow;
          break;
        case "Rain":
          icon = rain;
          break;
        case "Drizzle":
          icon = drizz;
          break;
        case "Thunderstorm":
          icon = thunder;
          break;
        default:
          icon = fog;
          break;
      }
    return (
        <div className='col-12 '>
          <div className="row">
            <div className='MainWindow col-12 col-md-6 p-5 mt-3'>
                  <h5 className='col-12 col-md-11 mb-0'style={{alignContent:"center"}}>{mth}, {day}</h5>
                  <h4 className='col-12 col-md-10' style={{textAlign:"center"}}>{(props.city.toUpperCase())}</h4>
                  <div className='row '>
                      <div className='col-12 col-md-6 ml-4'>
                          <h1 className='col-12 col-md-11 mb-1' style={{alignContent:"center"}}>{(props.data.list[0].main.temp)} ℃</h1>
                          <h4 className='col-11 mb-3'>{(props.data.list[0].weather[0].description)}</h4>
                          <h5 className='col-11 '>feels like: {(props.data.list[0].main.feels_like)} ℃</h5>
                      </div>
                      <img className='col-12 col-md-4 p-0' src={icon}/>
                      <div className='row ml-4 mt-4'>
                          <p className='col-5 mb-0' >temp min: {(props.data.list[0].main.temp_min)} ℃</p>
                          <p className='col-5 mb-0' ><i className="fa fa-wind "/> wind: {(props.data.list[0].wind.speed)} m/s</p>
                          <p className='col-5 mb-0' >temp max: {(props.data.list[0].main.temp_max)} ℃</p>
                          <p className='col-5 mb-0' ><i className='fa-droplet'/> humidity: {(props.data.list[0].main.feels_like)} %</p>
                          <p className='col-5 mb-0' >visibility: {(props.data.list[0].main.feels_like)} </p>  
                      </div>
                  </div>
              </div>
              <div className=' main-graph col-12 col-md-6 '>
                <Graphs data={props.data}/>
                <p style={{textAlign:"center", color:"wheat"}}>*temp vs date graph</p>
              </div>
            </div>
        </div>
    );
}

export default Main;
