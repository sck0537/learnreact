import CountUI from '../../components/Count';


// import  store from '../../redux/store'

import { connect } from 'react-redux';
import { createIncrementAction, createIncrementAsyncAction, createDecrementAction } from '../../redux/count_action'
// function mapStateToProps(state) {
//     return { count: state }
// }


// function mapDispatchToProps(dispatch) {
//     return {

//         decrement: number => dispatch(createDecrementAction(number)),
//         increment: number => dispatch(createIncrementAction(number)),
//         Asyncincrement: number => dispatch(createIncrementAsyncAction(number,3000))
//     }


// }

export default connect(
    state => ({ count: state }),
    {
        decrement: createDecrementAction,
        increment: createIncrementAction,
        Asyncincrement: createIncrementAsyncAction
    }


)(CountUI);

