import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, task: this.props.task };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else {
            result = (
                < div className="Todo" >
                    <li onClick={() => { this.props.toggleTodo(this.props.id) }} className={this.props.complete ? 'Todo-task completed' : "Todo-task"}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i className="fas fa-pen"></i>
                        </button>
                        <button onClick={this.props.deleteTodo}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div >
            )
        }
        return result;
    }
}

export default Todo;