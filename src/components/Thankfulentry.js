import React, { Component } from 'react'

class Thankfulentry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value});
}
    
    submit = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                <label>Item 1
                <input 
                name='thanks1'
                onChange={this.handleChange}/>
                </label>
                
                <br />
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

