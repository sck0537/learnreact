import React from 'react'
import Item from '../Item'
export default function List(props) {


 
    return (
        <div>
            <ul>
                {props.todos.map((item) => (
                    <Item item={item} key={item.id}delTodo={props.delTodo} changeStatus={props.changeStatus}/>
                ))}
            </ul>
        </div>
    )
}
                   
       
 