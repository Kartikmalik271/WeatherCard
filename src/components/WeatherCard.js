import React from 'react';

import styled from '@emotion/styled';
import Location from './Location';
import Icon from './Icon';
import Temperature from './Temperature';
import Condition from './Condition';


const WeatherCard = ({temp,condition,city,country}) => { 
    let highcolor = 0;
    let lowcolor = 0; 
    let bg=null;
   if(temp>12){ //gor hot weather
     highcolor = (1-((temp-12)/28))*255;
     lowcolor = highcolor-150;
     bg=`linear-gradient(
        to top,
        rgb(255,${highcolor},0),
         rgb(255,${lowcolor},0)
    );`
    
   }
   else if(temp<=12){  //for cold weather
     highcolor = (1-((temp+20)/32))*255;
     lowcolor = highcolor-150;
     bg=`
     linear-gradient(
        to top,
        rgb(0,${highcolor},255),
         rgb(0,${lowcolor},255)
    );
    `
   }
    const Card =styled.div`
    margin: 0 auto;
    background: ${bg};
    color: white;
    width: 200px;
    height: 260px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    border-radius: 25px;
    text-align: center;
    `
    return ( 
        <Card >
            
            <Location city={city} country={country}/>
            <Icon condition={condition}/>
            <Temperature temp={temp}/>
            <Condition condition={condition}/>
           
        </Card>
     );
}
 
export default WeatherCard;