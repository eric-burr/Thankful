import React, { useState, useEffect } from 'react';

function Header() {
    const [quote, newQuote] = useState('thanks')

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
         
    })
    

    return (
        <div>
            I am Thankful
            <h1>{quote}</h1> 
            <div></div>
        </div>
    )
}

export default Header

