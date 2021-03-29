import React, { useEffect } from 'react'

import Header from './components/Header'
import Needhelp from './components/Needhelp'
import Calendar from './components/Calandar'
import Thankfulentry from './components/Thankfulentry'

function App() {
  const dates = [0]
  let first = 0
  for(let i=0;i<=33;i++) {
      ++first
      dates.push(first)
  }

 useEffect(()=> {
   console.log('are you there', dates)
 })  

  return (
    <div className="App">
      <Header />
      <Thankfulentry date={dates} />
      <Needhelp />
      <Calendar dates={dates} />

    </div>
  );
}

export default App;
