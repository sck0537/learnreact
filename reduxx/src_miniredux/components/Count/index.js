import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import store from '../../redux/store'
export default class Count extends Component {

    state = {
        count: 0
    }
// componentDidMount(){

//     store.subscribe(() => {
//     this.setState({ })
// })
// }
    increment = () => {

        const { value } = this.selectNumber
        store.dispatch({
            type: 'increment', data: parseInt(value)
        })
      


    }
    decrement = () => {
        const { value } = this.selectNumber

        store.dispatch({
            type: 'decrement', data: parseInt(value)
        })
      

    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({
                       type: 'increment', data: parseInt(value)
                   })
         
        }


    }
    incrementAsync = () => {

        const { value } = this.selectNumber
        setTimeout(() => {

            store.dispatch({
                type: 'increment', data: value*1
            })


        }, 1000)
    }
    render() {
        return (
            <div>

                <h1>count={store.getState()}</h1>
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
