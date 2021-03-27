import React, { useState, useEffect } from 'react';
import Day from '../components/Day'
export default function Week(props) {
    const [thing, newthing] = useState()
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();

    useEffect(() => {
        for(let i=0;i<=30;i++){
            if(firstdayofmonth === props.dates[i]) {
                newthing(props.theday) 
            }
        }
    })
    
    return (
        <div>
            
            <div className='week'>
            {props.dates.map((value, index) => (
                console.log('value', props.dates[firstdayofmonth]),
          <div key={index} className='sunday'>
              
          </div>
          
            ))}
            </div>
        </div>
    )
}
