import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  state = {
    isEditting: false,
    task: this.props.task
  };
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };
  toggleForm = () => {
    this.setState({ isEditting: !this.state.isEditting });
  };
  handleUpdate = e => {
    e.preventDefault();
    // take new task data and pass to parents

    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditting: false });
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditting) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? " Todo-task completed" : "Todo-task "
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen fa-3x" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fa fa-trash fa-3x" aria-hidden="true" />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
