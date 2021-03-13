import React, { Component } from 'react'
import '../calendar.css'

export class Calendartwo extends Component {
    state = {
        calendar: []
    }

    createcalendar = () => {
        const create = document.createElement("div");
        create.innerText = 'newmonth'
        console.log('what is', create)
        create.classList.add("month")
        document.body.appendChild(create);
        for(let i = 0; i<=3; i++){
            const newWeek = document.createElement("div");
            newWeek.innerHTML = 'this is the wek'
            newWeek.classList.add('week'+i)
            for(let j = 0; j<=6;j++){
                const newDay = document.createElement("div");
                newDay.innerHTML = "this is the day"
                newDay.classList.add('day'+j) 
                console.log('newday', newDay)
            }
            console.log('in the loop', newWeek)
            document.body.appendChild(newWeek);
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.createcalendar}>to create calendar</button>
                {/* <div className="month"> <div className="header">The Calendar</div>
                    <div className="monday" style={{background: 'LightSkyBlue'}}>1</div>
                        <div className="weekone">week one</div>
                        <div className="weektwo">week two</div>
                        <div className="weekthree"> week three</div>
                        <div className="weekfour">week four</div>
                    <div className="tuesday" style={{background: 'LightSalmon'}}>2</div>
                    <div className="wednesday" style={{background: 'PaleTurquoise'}}>3</div>
                    <div className="thursday" style={{background: 'LightPink'}}>4</div>
                    <div className="friday" style={{background: 'PaleGreen'}}>5</div>
                    <div className="saturday" style={{background: 'red'}}>6</div>
                    <div className="sunday" style={{background: 'blue'}}>7</div>
                </div> */}
            </div>
        )
    }
}


export default Calendartwo
