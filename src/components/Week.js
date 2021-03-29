import React, { useEffect } from 'react';
import Thankfulentry from './Thankfulentry'
export default function Week(props) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();
    var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);
    var lastdayofMonth = lastDay.getDate();

    useEffect(()=> {
        console.log('in use effect', props)
        
    })
    
    // console.log('prpos.dates', props.dates)
    return (
        <div>
            
            <div className='week'>
            {props.dates.map((value, index) => {
                return firstdayofmonth<=index && index <= lastdayofMonth ?
                
                <div key={index} className='sunday'>
                    {value} 
                    {/* {index} */}
                </div> 
                : 
                 <div key={index} className='sunday'></div>
            })}
            </div>
            
        </div>
    )
}
