import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Graphs = (props) => {
    const temper=[]
    props.data.list.map((i)=>{ 
      var obj = {}
      var str=i.dt_txt;
      str=str.slice(8,10);
      console.log(str)
      obj["date"]=str;
      obj["temperature"]=i.main.temp;
      temper.push(obj)
  })
    console.log(temper)
    

    return (
        <div className='col-10 p-2 m-0'>
            
            <LineChart width={650} height={400}data={temper} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Line type="monotone" dataKey="temperature" stroke="#993333" />
                <CartesianGrid stroke="#a9a9a9" strokeDasharray="6 6" />
                <XAxis dataKey="date" angle={-45} textAnchor="end" stroke="#993333"/>
                <YAxis />
                <Tooltip  />
            </LineChart>
        </div>
    );
}

export default Graphs;