import React, { useState } from 'react';

function Header() {
    const [quote, newQuote] = useState('cheer up')

 async function api() {  
    const url = "https://type.fit/api/quotes"
    const response = await fetch(url)
    const data = await response.json();
    const newArray = []
    
    // grab quotes with the word thank or gratitude
    for(let i = 0;i <= 1642;i++){
        if (data[i].text.match(/thanks|thank|gratitude|appreciation/gi)) {
                
            console.log('found it', data[i].text)
            newArray.push(data[i].text)
            console.log('jijij', newArray)
        }
       
    }
    //11 quotes were about gratitude
    const digit = Math.floor((Math.random() * 11) + 1)
    const thing = newArray[digit]
    newQuote(thing)
}
    return (
        <div>
            I am Thankful
            <button type='button' onClick={api}>Get fun stuff</button>
            <h1>{quote}</h1>
        </div>
    )
}

export default Header

