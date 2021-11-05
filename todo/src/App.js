import React, { useState } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'
export default function App() {
    const [todos, setTodos] = useState([])



    const selectAll = () => {

        setTodos(todos.map(todo => ({ ...todo, done: !todo.done })))
    }



    const addTodo = (newTodo) => {
        const todoObj = {
            text: newTodo,
            id: nanoid(),
            done: false
        }

        setTodos([...todos, todoObj])

    }
    const delAll=()=>{
        setTodos(todos.filter(todo=>!todo.done))
    }


    const delTodo = (todoId) => {
        setTodos((todos) => todos.filter(t => t.id !== todoId))
    }


    const changeStatus = (todoId) => {
        setTodos((todos) => todos.map(t => t.id === todoId ? { ...t, done: !t.done } : t))
    }



    return (
        <div>
            <Header addTodo={addTodo} />
            <List todos={todos} delTodo={delTodo} changeStatus={changeStatus} />
            <Footer selectAll={selectAll} todos={todos} delAll={delAll}/>
        </div>
    )
}
