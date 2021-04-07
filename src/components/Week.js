import React from 'react';

export default function Week(props) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();
    var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);
    var lastdayofMonth = lastDay.getDate();
    console.log('first day of month', firstdayofmonth)

    const todayDate = new Date().getDate();
    
   
    
    return (
        <div>
            
            <div className='week'>
            {props.dates.map((value, index, arr) => {
                
                return firstdayofmonth<=index && index <= lastdayofMonth + firstdayofmonth - 1 ?
                
                <div  key={index} className='sunday'>
                    {index - firstdayofmonth + 1}
                    <button className='mapbutton' onClick={()=> console.log('hi', value - 3)}>click</button>
                </div> 
                : 
                 <div key={index} className='sunday'></div>
            })}
            </div>
            
        </div>
    )
}
