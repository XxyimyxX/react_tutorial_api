import React, {Component} from 'react'

class App extends Component{
    state = {
        data:[],
    }
    componentDidMount(){
        const url =  'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then((respone)=> respone.json())
            .then((result)=>{
                this.setState({
                    data: result,
                })
            })
    }
    render(){
        const {data} = this.state

        const result = data.map((users, index)=>{
            return <li key={index}>{users.name}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App