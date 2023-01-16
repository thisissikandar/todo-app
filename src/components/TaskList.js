import {useState, useContext} from 'react';
import { useTasks, useTaskDispatch } from './TaskContext';

const TaskList = () => {
    const tasks = useTasks();
  return (
    <ul className='list-group'>
        {
            tasks?.map((task)=>(
                <li key={task.id} className='list-group-item'>
                    <Task task={task}/>
                </li>
            ))
        }
    </ul>
  )
}

function Task({task}){
   const [isEditing, setIsEditing] = useState(false);
   const dispatch = useTaskDispatch();
   let taskContent;
   if(isEditing){
    taskContent = (
        <>
        <div className='input-group'>
          <input 
          className='form-control'
           value={task.text}
           onChange={
            (e)=>{
              dispatch({
                type: 'changed',
                task:{
                    ...task,
                    text: e.target.value
                }
              })
            }
           }
          />
          <button className='btn btn-success' onClick={()=> setIsEditing(false)}>save</button>
          </div>
        </>
    )
   }else{
      taskContent = (
        <>
          {task.text}
          <button className='btn btn-success' onClick={()=> setIsEditing(true)}>Edit</button>
        </>
      );
   }

   return(
    <label>
        <input className='form-check-input me-1' type='checkbox' checked={task.done} onChange={(e)=>{
            dispatch({
                type: 'changed',
                task: {
                    ...task,
                    done: e.target.checked
                }
            })
        }}/>
        {taskContent}
        <button className='btn btn-danger' onClick={()=>{
             console.log("text id: ", task.id)
           dispatch({
            type: 'deleted',
            id: task.id
           })
        }}>Delete</button>
    </label>
   )
}

export default TaskList;