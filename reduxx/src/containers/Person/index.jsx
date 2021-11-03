import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {Button} from '@material-ui/core'
import { AddPerson } from '../../redux/actions/person'
class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name, age)
        const person = {
            id: nanoid(),
            name,
            age
        }
        console.log(person.id)
        this.props.addPerson(person)
        this.ageNode.value=''
        this.nameNode.value=''
    }
    render() {
        // console.log('p', this.props.persons)
        return (
            <div>
                <h2>Person Component</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="name" />
                <input ref={c => this.ageNode = c} type="text" placeholder="age" />
                
                
                <Button onClick={this.addPerson} variant="contained" color="primary">add</Button>
    

                <ul>
                    {
                    this.props.persons.map(
                        (person) => {
                            return <li key={person.id}>name:{person.name} age:{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(

    state => ({

        persons: state.person
    }),
    {
        addPerson: AddPerson
    }
)(Person)



