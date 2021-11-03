
const createIncrementAction = (data) => ({ type: 'increment', data })
const createDecrementAction = (data) => ({ type: 'decrement', data })
const createIncrementAsyncAction = (data, time) => {


    return (dispatch) => {




        setTimeout(() => {

            dispatch(createIncrementAction(data))
        }, time)
    }

}
export { createIncrementAction, createIncrementAsyncAction, createDecrementAction }