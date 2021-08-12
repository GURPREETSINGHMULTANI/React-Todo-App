import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
        this.setState({ task: "" });
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input name="task" onChange={this.handleChange} value={this.state.task} id="task" type="text" placeholder="New Todo"></input>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;