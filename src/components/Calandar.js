import React from 'react';
import '../calendar.css'

import Week from '../components/Week'


function Calandar(props) {
  
  // const dates = [0]
  // let first = 0
  // for(let i=0;i<=33;i++) {
  //     ++first
  //     dates.push(first)
  // }

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <div className='calendartop'>
      <div className='week'>
        {day.map((value, index) => (
          <div key={index} className='sunday'>{value}
          </div>
        ))}
      </div>
          <Week dates={props.dates}/>
          
    </div>
  )
}

export default Calandar






