import React, { Component } from 'react';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm.js';
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: JSON.parse(window.localStorage.getItem("todos")) || [] }
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {
        let todos = this.state.todos.map(t => t);
        this.setState({ todos: [...todos, newTodo] });
        window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    }
    delete(id) {
        let todos = this.state.todos.filter(t => {
            return t.id !== id
        })
        this.setState({ todos: todos });
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
    update(id, updatedTask) {
        let todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                console.log({ task: updatedTask, id: todo.id });
                return { task: updatedTask, id: todo.id };
            }
            else {
                return todo;
            }
        })
        this.setState({ todos: todos });
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
    toggleCompletion(id) {
        let todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { task: todo.task, id: todo.id, completed: !todo.completed }
            }
            else {
                return todo;
            }
        })
        this.setState({ todos: todos });
    }
    render() {
        return (
            <div className="TodoList" >
                <h1>Todo List! <span>A Simple React Todo List App.</span></h1>
                <ul>
                    {this.state.todos.map(t => <Todo toggleTodo={this.toggleCompletion} complete={t.completed} key={t.id} id={t.id} updateTodo={this.update} deleteTodo={() => this.delete(t.id)} task={t.task} />)}
                </ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;