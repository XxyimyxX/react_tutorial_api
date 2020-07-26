import React, {Component} from 'react'

class Form extends Component {
    initialState = {
      name: '',
      email: '',
      phone:'',
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    addEmployer = ()=>{
        this.props.addEmployer(this.state)
        this.setState(this.initialState)
    }
    state = this.initialState

    render(){
        const {name,email,phone} = this.state
        return (
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange} />
                <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={phone}
                onChange={this.handleChange} />
              <input type="button" value="Add" onClick={this.addEmployer} />  
            </form>
        );
    }
  }

  export default Form;