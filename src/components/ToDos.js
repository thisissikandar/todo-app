import React from 'react'
import { ToDo } from './ToDo'

export const ToDos = (props) => {
    return (
        <div className='container'>
            <h3 className='text-center my-3'>ToDo List</h3>
            {props.todos.map((todo)=>{
                return(

                    <ToDo todo={todo} onDelete= {props.onDelete} />
                )
                })
            }
        </div>
    )
}
