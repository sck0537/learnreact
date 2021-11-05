import React from 'react'

export default function Item(props) {

    // function delTodo(id) {
    //     return () => props.delTodo(id)
    // }
    const { item } = props

    // changStatus = (id) => {
    //     return props.changeStatus(id)
    return (
        <div>
            <li >
                <input type="checkbox" onChange={()=>props.changeStatus(item.id)} checked={item.done} />  {item.text} <button onClick={()=>props.delTodo(item.id)}>del</button>
            </li>
        </div>
    )
}
