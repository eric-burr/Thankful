import React, { Component } from 'react'
import '../calendar.css'

export class Calendartwo extends Component {
    state = {
        calendar: [],
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        day: "the thing"
    }

    

    createcalendar = () => {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var firstdayofmonth = firstDay.getDay();
        console.log('first day of month', firstdayofmonth)
        console.log('first day is', firstDay)
        var lastDay = new Date(date.getFullYear(), date.getMonth() +1, 0);
        console.log('last day is', lastDay.getDay())
        for(let i = 0; i<=6; i++) {
            if(firstdayofmonth === i) {
                console.log('a match', i)
                console.log('firstday', firstdayofmonth)
                this.setState({
                    day: i
                })
            } else console.log('no dice')
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.createcalendar}>to create calendar</button>
                <div className="month"> 
                    <div className="header">The Calendar</div>
                    <div className="week" style={{background: 'LightSkyBlue'}}>
                        <div className="sunday">Sunday</div>
                        <div className="monday">{this.state.day}</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday">Wednesday</div>
                        <div className="thursday">Thursday</div>
                        <div className="friday">Friday</div>
                        <div className="saturday">Saturday</div>
                    </div>
                        
                    <div className="week" style={{background: 'LightSalmon'}}>
                        <div className="sunday">Sunday</div>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday">Wednesday</div>
                        <div className="thursday">Thursday</div>
                        <div className="friday">Friday</div>
                        <div className="saturday">Saturday</div>
                    </div>
                    <div className="week" style={{background: 'PaleTurquoise'}}>
                        <div className="sunday">Sunday</div>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday">Wednesday</div>
                        <div className="thursday">Thursday</div>
                        <div className="friday">Friday</div>
                        <div className="saturday">Saturday</div>
                    </div>
                    <div className="week" style={{background: 'LightPink'}}>
                        <div className="sunday">Sunday</div>
                        <div className="monday">Monday</div>
                        <div className="tuesday">Tuesday</div>
                        <div className="wednesday">Wednesday</div>
                        <div className="thursday">Thursday</div>
                        <div className="friday">Friday</div>
                        <div className="saturday">Saturday</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Calendartwo
