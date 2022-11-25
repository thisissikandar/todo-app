import React from 'react'

export const ToDo = ({ todo, onDelete }) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.disc}</p>
            <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button>
        </div>
    )
}
