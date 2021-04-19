import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Needhelp from './components/Needhelp'
import Calendar from './components/Calandar'
import Thankfulentry from './components/Thankfulentry'
import '../src/calendar.css'

function App() {
  const [view, changeview] = useState(false)
  const [entryview, calendarview] = useState(true)
  const [body, updatedbody] = useState([])

  const date = new Date().getDate();

  const dates = [0]
  let first = 0
  for(let i=0;i<=33;i++) {
      ++first
      dates.push(first)
  }

 useEffect(()=> {
  setTimeout(() => {
    changeview(true)
  }, 5000);
 }, []) 
 
 function viewCalendar() {
   calendarview(!entryview)
 }

  return (
    <div className="body">
        
      { view === false ? <div>
        <Header />
      </div> 
        : 
        <div>
          {entryview === true ? 
          <div> 
            <Thankfulentry 
            todaysdate={date}
            body={body}
             date={dates}
             />
            <button className='toggle' onClick={viewCalendar}>Calendar</button>
          </div>
          : 
          <div><Needhelp />
          <Calendar body={body} dates={dates} />
          <button className='toggle' onClick={viewCalendar}>Entry</button>
           </div>}
          

        </div>}  
    </div>
  );
}

export default App;
