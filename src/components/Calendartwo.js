import React, { Component } from 'react'
import '../calendar.css'

export class Calendartwo extends Component {
    state = {
        calendar: []
    }

    // createcalendar = () => {
    //     const create = document.createElement("div");
    //     create.innerText = 'newmonth'
    //     console.log('what is', create)
    //     create.classList.add("month")
    //     document.body.appendChild(create);
    //     for(let i = 0; i<=3; i++){
    //         const newWeek = document.createElement("div");
    //         newWeek.innerHTML = 'this is the wek'
    //         newWeek.classList.add('week'+i)
    //         for(let j = 0; j<=6;j++){
    //             const newDay = document.createElement("div");
    //             newDay.innerHTML = "this is the day"
    //             newDay.classList.add('day'+j) 
    //             console.log('newday', newDay)
    //         }
    //         console.log('in the loop', newWeek)
    //         document.body.appendChild(newWeek);
    //     }
    // }
    render() {
        return (
            <div>
                {/* <button onClick={this.createcalendar}>to create calendar</button> */}
                <div className="month"> <div className="header">The Calendar</div>
                    <div className="week" style={{background: 'LightSkyBlue'}}>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday"> wednesday</div>
                        <div className="thursday">thursday</div>
                        <div className="friday">friday</div>
                        <div className="saturday">saturday</div>
                        <div className="sunday">sunday</div>
                    </div>
                        
                    <div className="week" style={{background: 'LightSalmon'}}>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday"> wednesday</div>
                        <div className="thursday">thursday</div>
                        <div className="friday">friday</div>
                        <div className="saturday">saturday</div>
                        <div className="sunday">sunday</div>
                    </div>
                    <div className="week" style={{background: 'PaleTurquoise'}}>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday"> wednesday</div>
                        <div className="thursday">thursday</div>
                        <div className="friday">friday</div>
                        <div className="saturday">saturday</div>
                        <div className="sunday">sunday</div>
                    </div>
                    <div className="week" style={{background: 'LightPink'}}>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday"> wednesday</div>
                        <div className="thursday">thursday</div>
                        <div className="friday">friday</div>
                        <div className="saturday">saturday</div>
                        <div className="sunday">sunday</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Calendartwo
