import React from 'react';

import styled from '@emotion/styled';

const Temperature = ({temp}) => {
    const Temp = styled.div`
    
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 2rem;
    
    `
    return ( 
            
                <Temp>{temp}°C</Temp>
        
     );
}
 
export default Temperature;