import React from 'react'

export default function Header(props) {

function handleKeyUp(event) {
    const {keyCode,target} = event
    if (keyCode!==13) return
    console.log(keyCode,target)
    console.log(target.value)

    addTodo()
}


    const inpuT=React.createRef()

    function addTodo(){

        props.addTodo(inpuT.current.value)
        inpuT.current.value=''

    }
    

    return (
        <div>
            <input ref={inpuT}type="text" onKeyUp={handleKeyUp} placeholder="enter to add"/>
            {/* <button onClick={addTodo}>submit</button> */}
        </div>
    )
}
