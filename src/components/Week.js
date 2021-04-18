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
    
    return (
        <div>
            <div className='week'>
            {props.dates.map((value, index, arr) => {
                
                return  todayDate === index ?
                    
                <div style={{backgroundColor: "lightblue"}} key={index} className='sunday'>
                    {index - firstdayofmonth + 1}
                    {/* <div>{props.body.map(value => <li>{value}</li>)}</div> */}
                    {/* <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1> */}
                    <button style={{backgroundColor: "lightblue"}} className='mapbutton' onClick={()=> <Modal />}>click</button>
                </div> 
                : (firstdayofmonth<=index && index <= lastdayofMonth + firstdayofmonth - 1) ?
                    
                    <div className='sunday'>{index - firstdayofmonth + 1}
                    <button className='mapbutton' onClick={()=> <Modal />}>click</button></div> :
                
                 <div key={index} className='sunday'></div>
            })}
            </div>
            
        </div>
    )
}
