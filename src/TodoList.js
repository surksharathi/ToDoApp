import React, { Component } from "react";
import Todo from "./Todo";
import NewToDoform from "./newTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Got a job" }, { task: "go for dinner " }]
    };
  }
  create = newToDo => {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
    // console.log(this.state.todos);
  };

  render() {
    const todo = this.state.todos.map(task => <Todo task={task.task} />);
    return (
      <div>
        <h1>Todo Maker!</h1>
        {todo}
        <NewToDoform createToDo={this.create} />
      </div>
    );
  }
}
