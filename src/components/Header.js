import React, { useState, useEffect } from 'react';
import '../calendar.css'

function Header() {
    const [quote, newQuote] = useState('')

 async function api() {  
    const url = "https://type.fit/api/quotes"
    const response = await fetch(url)
    const data = await response.json();
    const listofquotes = []
    
    for(let i = 0;i <= 1642;i++){
        if (data[i].text.match(/thanks|thank|gratitude|appreciation/gi)) {
            listofquotes.push(data[i].text)
        }
    }
    const digit =  Math.floor((Math.random() * 11) + 1)
    const selectedQuote = listofquotes[digit]
    
    
    newQuote(selectedQuote) 
}

    useEffect(() => {
         api();
         
    },[])


    

    return (
        <div className='background'>
            <h1 className='fade'>{quote}</h1> 
        </div>
    )
}

export default Header

