
import { connect } from 'react-redux';
import { decrement, increment, incrementAsync } from '../../redux/actions/count'

import React, { Component } from 'react'
import { Button } from '@material-ui/core'
class Count extends Component {


    increment = () => {

        const { value } = this.selectNumber

        this.props.increment(value * 1)

    }
    decrement = () => {
        const { value } = this.selectNumber

        this.props.decrement(value)


    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }

    }
    incrementAsync = () => {

        const { value } = this.selectNumber
        this.props.Asyncincrement(value * 1, 3000)
    }
    render() {
        // console.log(this.props)
        return (
            <div>

                <h1>count={this.props.count}</h1>down{this.props.personl}
                <select ref={c => this.selectNumber = c} >

                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <Button onClick={this.increment} variant="contained" color="primary">+</Button>
                <Button onClick={this.decrement} variant="contained" color="primary">-</Button>
                <Button onClick={this.incrementIfOdd} variant="contained" color="primary">+</Button>
                <Button onClick={this.incrementAsync} variant="contained" color="primary">+</Button>
            </div>
        )
    }
}


export default connect(
    state => ({ count: state.count, personl: state.person.length }),
    {
        decrement: decrement,
        increment: increment,
        Asyncincrement: incrementAsync
    }


)(Count);

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

