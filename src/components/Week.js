import React from 'react';

export default function Week(props) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();
    var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);
    var lastdayofMonth = lastDay.getDate();
    console.log('first day of month', firstdayofmonth)

    const todayDate = new Date().getDate();
    
    function enterondate() {
       console.log('enter on date', props.dates[todayDate]);
       console.log('props.body', props.body)
       if(todayDate===props.dates[todayDate]) {
           return props.body 
       }
   }
    
    return (
        <div>
            <button onClick={enterondate}>enter on date</button>
            <div className='week'>
            {props.dates.map((value, index, arr) => {
                
                return  todayDate === index ?
                    
                <div  key={index} className='sunday'>
                    {index - firstdayofmonth + 1}
                    <div>{props.body.map(value => <li>{value}</li>)}</div>
                    <button className='mapbutton' onClick={()=> console.log('hi', props.body)}>click</button>
                </div> 
                : (firstdayofmonth<=index && index <= lastdayofMonth + firstdayofmonth - 1) ?
                    
                    <div className='sunday'>{index - firstdayofmonth + 1}</div> :
                
                 <div key={index} className='sunday'></div>
            })}
            </div>
            
        </div>
    )
}
