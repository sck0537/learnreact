import React, { Component } from 'react'
import { Button } from '@material-ui/core'
export default class Count extends Component {

    state = {
        count: 0
    }

    increment = () => {

        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({
            count: count + parseInt(value)
        })

    }
    decrement = () => {

        const { count } = this.state
        const { value } = this.selectNumber
        this.setState({
            count: count - parseInt(value)
        })

    }
    incrementIfOdd = () => {

        const { count } = this.state
        const { value } = this.selectNumber
        if (count % 2 !== 0) {
            this.setState({
                count: count + parseInt(value)
            })
        }


    }
    incrementAsync = () => {

        const { count } = this.state
        const { value } = this.selectNumber
        setTimeout(() => {

            this.setState({
                count: count + parseInt(value)
            })


        }, 1000)
    }
    render() {
        return (
            <div>

                <h1>count={this.state.count}</h1>
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
