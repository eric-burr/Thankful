import React from 'react';
import Modal from './Modal'

export default function Week(props) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var firstdayofmonth = firstDay.getDay();
    var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);
    var lastdayofMonth = lastDay.getDate();
    console.log('first day of month', firstdayofmonth)

    const todayDate = new Date().getDate();
    console.log('todays date', todayDate);
    console.log('props', props.dates)
    return (
        <div>
            <div className='week'>
            {props.dates.map((value, index, arr) => {

                return  todayDate + firstdayofmonth - 1 === index ?

                <div key={index} className='sunday'>
                    {index - firstdayofmonth + 1}
                    <div>{props.body.map(value => 
                    <li>{value}</li>
                    )}
                    </div>
                </div> 
                : (firstdayofmonth<=index && index <= lastdayofMonth + firstdayofmonth - 1) ?
                    
                    <div className='sunday'>{index - firstdayofmonth +1}
                    {/* <button className='mapbutton' >click</button> */}
                    </div> 
                    :
                
                 <div key={index} className='sunday'>days of previous and next month</div>
            })}
            </div>
            
        </div>
    )
}
