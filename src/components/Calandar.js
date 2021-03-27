import React, { useState, useEffect } from 'react';
import '../calendar.css'

import Week from '../components/Week'


function Calandar() {
  const [dayone, setday] = useState()
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var firstdayofmonth = firstDay.getDay();
  var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);

  const dates = [0]
  let first = 0
  for(let i=0;i<=33;i++) {
      ++first
      dates.push(first)
  }

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  useEffect(() => {
    setday(dates[firstdayofmonth])
    
  })

  return (
    <div>
      <div className='week'>
        {day.map((value, index) => (
          <div key={index} className='sunday'>{value}
          </div>
        ))}
      </div>
          <Week theday={dayone} dates={dates}/>
          
    </div>
  )
}

export default Calandar






