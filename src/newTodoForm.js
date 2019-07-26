import React, { Component } from "react";
import uuid from "uuid/v4";

export default class newTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createToDo(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          placeholder="write Task"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
