import { useState } from 'react';
import data from '../data';

const AddToDo = (props) => {

    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("");

    const submit = (e)=>{
        data.push(...data, {title, disc})
        console.log(title, disc)
    }

    // console.log("data", data)
    return (
        <div className="container my-2 ">
            <h3>Add A TODO</h3>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">ToDo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">ToDo Descripttion</label>
                    <input type="text" value={disc} onChange={(e)=>setDisc(e.target.value)} className="form-control" id="disc" />
                </div>
                <button type="submit" className="btn btn-primary btn-sm" onClick={submit}>Add ToDo</button>
        </div>

    )
}

export default AddToDo
