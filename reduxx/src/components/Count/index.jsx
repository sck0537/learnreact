import React, { Component } from 'react'
import { Button } from '@material-ui/core'
export default class Count extends Component {


    increment = () => {

        const { value } = this.selectNumber
      
        this.props.increment(value*1)

    }
    decrement = () => {
        const { value } = this.selectNumber

        this.props.decrement(value)
      

    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
     if(this.props.count % 2 !== 0) {
         this.props.increment(value*1)
     }

    }
    incrementAsync = () => {

        const { value } = this.selectNumber
        this.props.Asyncincrement(value*1)
    }
    render() {

        return (
            <div>

                <h1>count={this.props.count}</h1>
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
