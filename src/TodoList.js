import React, { Component } from "react";
import Todo from "./Todo";
import NewToDoform from "./newTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  create = newToDo => {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
    // console.log(this.state.todos);
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  update = (id, updateTask) => {
    const updatedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodo });
  };

  toggleCompletion = id => {
    const updatedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodo });
  };

  render() {
    const todo = this.state.todos.map(task => (
      <Todo
        task={task.task}
        key={task.id}
        id={task.id}
        removeTodo={this.remove}
        updateTodo={this.update}
        completed={task.completed}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List ! <span> A Simple React Todo List App</span>
        </h1>
        <ul> {todo} </ul>
        <NewToDoform createToDo={this.create} />
      </div>
    );
  }
}
