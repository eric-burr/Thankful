import React, { useState, useEffect } from 'react';
import Day from '../components/Day'
export default function Week(props) {
    const [thing, newthing] = useState()
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();
   
    
    return (
        <div>
            
            <div className='week'>
            {props.dates.map((value, index) => {
                //comparing to index since it could only be 0-7
                //so it'll be on the first line of the calendar
                return firstdayofmonth===index ?
                
          <div key={index} className='sunday'>
              {firstdayofmonth} 
          </div> 
          : 
          <div className='sunday'></div>
            })}
            </div>
        </div>
    )
}
