import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Needhelp from './components/Needhelp'
import Calendar from './components/Calandar'
import Thankfulentry from './components/Thankfulentry'
import '../src/calendar.css'

function App() {
  const [view, changeview] = useState(false)
  const dates = [0]
  let first = 0
  for(let i=0;i<=33;i++) {
      ++first
      dates.push(first)
  }
//  useEffect(()=> {
//    console.log('are you there', dates)
//    while(date < date + 3) {
//      changeview(!view)
//    }
//  }) 
 
 const date = new Date().getSeconds();



  return (
    <div className="App">
        
      { view === false ? <div>
        <Header />
      </div> 
        : 
        <h1>
          <Thankfulentry date={dates} />
      <Needhelp />
       <Calendar dates={dates} /> 
          </h1>}  
    </div>
  );
}

export default App;
