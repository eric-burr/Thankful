import React, { Component } from 'react'

class Thankfulentry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: this.props.date,
            thanks1: "",
            thanks2: "",
            thanks3: "",
            Prompt: "",

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
            if(this.state.thanks1==='' || this.state.thanks2==='' || this.state.thanks3===''){
               this.setState({
                   Prompt: "You must fill out all three!"
               })
                return null
            }
            this.props.body.push(body1[i])
            console.log('props', this.props.body)
        }
        this.setState({
            thanks1: "",
            thanks2: "",
            thanks3: ""
        })
    }


    render() {
        return (
            <div className='inputs'>
                <div>Today I am grateful for..</div>
                <form autoComplete='off' onSubmit={this.submit}>
                {/* <label>Item 1 */}
                <input 
                autoFocus
                className='entry'
                name='thanks1'
                value={this.state.thanks1}
                onChange={this.handleChange}/>
                 <br />
                {/* <label>Item2 */}
                <input
                className='entry'
                name='thanks2'
                value={this.state.thanks2}
                onChange={this.handleChange} />
                
                <br />
                {/* <label>Item 3 */}
                <input
                className='entry'
                name='thanks3'
                value={this.state.thanks3}
                onChange={this.handleChange} />
                {/* </label> */}

                <br />
                <button className='entrybutton'>Thank You</button>
                
            </form>
            {this.state.Prompt}
            </div>
        )
    }
}

export default Thankfulentry

