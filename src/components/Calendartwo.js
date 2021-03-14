import React, { Component } from 'react'
import '../calendar.css'

export class Calendartwo extends Component {
    state = {
        calendar: [],
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }

    

    createcalendar = (year, month) => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDay = new Date(year, month).getDay();
        console.log('first day is', firstDay)
        const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
        console.log('days in month', daysInMonth)
    }

    

    render() {
        return (
            <div>
                <button onClick={this.createcalendar(this.currentYear, this.currentMonth)}>to create calendar</button>
                <div className="month"> 
                    <div className="header">The Calendar</div>
                    <div className="week" style={{background: 'LightSkyBlue'}}>
                        <div className="sunday">Sunday</div>
                        <div className="monday">Monday</div>
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
