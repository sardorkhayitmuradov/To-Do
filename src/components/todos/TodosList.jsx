import React, { useState } from 'react';
import Todositem from './TodosItem';
import "./Todos.css"

const Todoslist = () => {
    const [todos, setTodos] = useState([])

    const handleAddTodos = () => {
        let elInputValue = document.querySelector(".todo__input").value;

        let newTodos = {
            id: todos[todos.length - 1]?.id + 1 || 1,
            title:elInputValue,
            isCompleted:false
        }

        setTodos(state => [...state, newTodos])
    }

    const handleDelete = (id) => {
        setTodos(state=> {
            return state.filter(item => item.id !== id)
        })
    }

    const handleCompleted = (e, id) => {

        setTodos(state => {
            const newState = state.map(item => {
                if(item.id === id){
                    return {
                        ...item,
                        isCompleted:e.target.checked
                    }
                }
                return item
            })

            return newState
        })
    }

    const handleClearAllBtn = () => {
        setTodos([])
    }

    const handleAllBtn = () => {
        // eslint-disable-next-line array-callback-return
        setTodos(state => state.filter(item => {
            return {...item}
        }))
    }

    const handleCompletedBtn = () => {
        // eslint-disable-next-line array-callback-return
        setTodos(state => state.filter(item => {
            if(item.isCompleted){
                return {...item}
            }
        }))
    }

    const handleUncompleted = () => {
        // eslint-disable-next-line array-callback-return
        setTodos(state => state.filter(item => {
            if(!item.isCompleted){
                return {...item}
            }
        }))
    }
    return (
        <div className='todo'>
            <form className='todo__form'>
                <input className='todo__input' type="text" placeholder='What things you gonna do ?' />
                <button onClick={handleAddTodos} className='todo__add-btn' type='button'>Add</button>
            </form>

            <div className='todo__all-btns'>
                <button onClick={handleAllBtn} className=' todo__btns'>All</button>
                <button onClick={handleCompletedBtn} className=' todo__btns'>Completed</button>
                <button onClick={handleUncompleted} className='todo__btns'>Uncomplited</button>
                <button onClick={handleClearAllBtn} className='todo__btns'>Clear All</button>
            </div>

            <ul className='todo__list'>
                {
                    todos.map(element => {
                        return <Todositem key={element.id} id={element.id} title={element.title} isCompleted={element.isCompleted} handleDelete={() => handleDelete(element.id)} handleCompleted={handleCompleted} />
                    })
                }
            </ul>
        </div>
    );
}

export default Todoslist;