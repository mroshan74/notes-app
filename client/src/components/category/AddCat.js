import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddCategory } from '../../redux/actions/categoriesAction'

class AddCat extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const fd = { name: this.state.name }
        console.log(fd)
        this.props.dispatch(startAddCategory(fd))
        this.setState({name: ''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder='Add task' />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default connect()(AddCat)
