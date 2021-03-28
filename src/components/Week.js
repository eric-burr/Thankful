import React, { useState, useEffect } from 'react';
import Day from '../components/Day'
export default function Week(props) {
    const [thing, newthing] = useState()
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();
    var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);
    var lastdayofMonth = lastDay.getDate();
    
    return (
        <div>
            
            <div className='week'>
            {props.dates.map((value, index) => {
                //comparing to index since it could only be 0-7
                //so it'll be on the first line of the calendar
                return firstdayofmonth<=index && index <= lastdayofMonth ?
                
          <div key={index} className='sunday'>
              {index} 
          </div> 
          : 
          <div key={index} className='sunday'></div>
            })}
            </div>
        </div>
    )
}
