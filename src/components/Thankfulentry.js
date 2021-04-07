import React, { Component } from 'react'
import Week from './Week'
class Thankfulentry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: this.props.date
        }
    }

    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value});
}
    
    submit = (e) => {
        e.preventDefault();
        const body1= [
            this.state.thanks1,
            this.state.thanks2,
            this.state.thanks3
        ]
        for(let i=0;i<=2;i++) {
            this.props.body.push(body1[i])
            console.log('props', this.props.body)
        }
        
        const date = new Date().getDate();
        console.log('ding', date)
        
    }


    render() {
        return (
            <div className='inputs'>
                <form onSubmit={this.submit}>
                <label>Item 1
                <input 
                name='thanks1'
                onChange={this.handleChange}/>
                </label>                <br />
                <label>Item2
                <input
                name='thanks2'
                onChange={this.handleChange} />
                </label>
                
                <br />
                <label>Item 3
                <input
                name='thanks3'
                onChange={this.handleChange} />
                </label>

                <br />
                <button>Thank You</button>
                
            </form>
            </div>
        )
    }
}

export default Thankfulentry

