import { useState } from 'react';
import { useTaskDispatch } from './TaskContext';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useTaskDispatch();

  return (
    <>
      <div className='input-group'>
        <input
          className='form-control'
          placeholder='Add Task'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='btn btn-primary' onClick={() => {

          setText('');
          dispatch({
            type: 'added',
            // eslint-disable-next-line no-const-assign
            id: nextId++,
            text: text
          })
        }}>Add</button>
      </div>
    </>
  )
}

let nextId = 3;

export default AddTask;
