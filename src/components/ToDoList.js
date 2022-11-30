import React, {useContext} from 'react';
import { dataContext } from '../context';

const ToDoList = () => {
    const data = useContext(dataContext)
    
    const handleDelete = (data, index)=>{
       console.log(data)
       console.log(index)
       Object.keys(data).slice(data.sNo, index)
    }

    return (
        <table className="table mx-auto container">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((data, index) => {
                        return <tr key={data.sNo}>
                            <th scope="row">{data.sNo}</th>
                            <td>{data.title}</td>
                            <td>{data.disc}</td>
                            <td><button type="button" class="btn btn-danger" onClick={()=>handleDelete(data, index)}>Delete</button></td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    )
}

export default ToDoList