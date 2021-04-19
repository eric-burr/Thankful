import React from 'react';
import '../calendar.css'

import Week from '../components/Week'


function Calandar(props) {
  

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <div className='calendartop'>
      <div className='week'>
        {day.map((value, index) => (
          <div key={index} className='sunday'>{value}
          </div>
        ))}
      </div>
          <Week body={props.body} dates={props.dates}/>
          
    </div>
  )
}

export default Calandar






