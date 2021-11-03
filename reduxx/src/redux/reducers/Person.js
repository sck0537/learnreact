



const initState=[{id:1,name:'Max',age:28},{id:2,name:'Manu',age:29},{id:3,name:'Stephanie',age:26}]


function personReducer(preState=initState,action) {
    switch(action.type){
        case 'ADD_PERSON':
            console.log('prest',preState)
            return [action.payload,...preState]
           
             
        
        default:
            return preState
    }
    
}
export default personReducer