import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        listEmployer:[],
    }
    componentDidMount(){
        const url =  'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then((respone)=> respone.json())
            .then((result)=>{
                this.setState({
                    listEmployer: result,
                })
            })
    }

    deleteEmployer = (index) => {
        const {listEmployer} = this.state
        this.setState({
            listEmployer: listEmployer.filter((character, i) => {
                return i !== index
            }),
        })
    }
    addEmployer = (state)=>{
        //Operado Spread
        this.setState({listEmployer: [...this.state.listEmployer, state]})
    }
    render(){
        const {listEmployer} = this.state
        return(
            <div className="container">
                <Table listEmployer={listEmployer} deleteEmployer={this.deleteEmployer} />
                <Form addEmployer={this.addEmployer} />
            </div>
        )  
    }
}

export default App