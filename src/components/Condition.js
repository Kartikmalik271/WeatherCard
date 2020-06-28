import React from 'react';

import styled from '@emotion/styled';

const Condition = ({condition}) => {
    const Condt = styled.div`
    
        font-size: 1.2rem;
        padding-bottom:15px;
    
    `
    return ( 
       
    <Condt>{condition}</Condt>
        
     );
}
 
export default Condition;