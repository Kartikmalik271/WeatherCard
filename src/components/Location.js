import React from 'react';

import styled from '@emotion/styled';

const Location = ({city,country}) => {
   
    const Local  =styled.div`
      
        padding-top: 10px;
      
    `
    const City  =styled.div`
    
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.6em;
    font-weight:bolder;
  
    `
    const Country  =styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    `
    return ( 
        <Local>
                <City>{city}</City>
                <Country>{country}</Country>
        </Local>
     );
}
 
export default Location;