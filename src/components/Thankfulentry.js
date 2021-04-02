import React, { Component } from 'react'

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
        const date = new Date().getDate();
        console.log('ding')
        for(let i=0;i<=30;i++) {
            if(date === this.props.date[i]) {
                this.props.date[i] = 'a big long story'
            }
        }
        console.log('modifed array', this.state.date)
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

