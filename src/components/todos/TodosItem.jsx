import React from 'react';

const Todositem = (props) => {
    return (
        <li className='todo__item' key={props.id}>
            <h3 className='todo__title' style={{color: props.isCompleted ? "red" : "", fontStyle: props.isCompleted ? 'italic' : "", textDecoration: props.isCompleted ? 'line-through' : ""}}>{props.title}</h3>
            <div className='todo__item-btn'>
                <input className='todo__checkbox' type="checkbox" checked={props.isCompleted} onChange={(e) => { props.handleCompleted(e, props.id) }} />

                <button onClick={props.handleDelete} className='todo__delete-btn'>Delete</button>

            </div>
        </li>
    );
}

export default Todositem;