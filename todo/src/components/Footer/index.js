import React from 'react'

export default function Footer(props) {


const doneCount=props.todos.filter(todo=>todo.done).length

    return (
        <div>
            <input type="checkbox"  onChange={props.selectAll}/> {doneCount}/{props.todos.length} <button onClick={props.delAll}>Del All</button>
        </div>
    )
}
