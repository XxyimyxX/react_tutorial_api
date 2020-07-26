import React, {Component} from 'react'

//Crear un componente

const TableHeader = ()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>Action</th>
          </tr>
        </thead>
    )
}
//Componente
const TableBody = (props)=>{

    //Transformar la lista con los tag del table
    const tableBody = props.listEmployer.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <button onClick={() => props.deleteEmployer(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{tableBody}</tbody>
}

//Componente de clase
class Table extends Component{
    render(){
        const {listEmployer , deleteEmployer} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody listEmployer={listEmployer} deleteEmployer={deleteEmployer} />        
            </table>
        )
    }
}
export default Table