import React, { Component } from 'react'
import Todolist from './components/Todolist'
import AddTask from './components/Addtask'

export class App extends Component {
  state = {
    tasks: [
      { id: 1, description: 'todo1', done: false },
      { id: 2, description: 'todo2', done: false },
      { id: 3, description: 'todo3', done: false }
    ],
  }
   taskdelete=(id)=> {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.id !== id),
    })
  }
  taskdone=(id)=>{
    this.setState({
      tasks:this.state.tasks.map(el =>el.id===id?{...el,done:!el.done}:el)
    })
  }
  addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  render() {
    return (
      <div>
       
        <h1>my today's tasks</h1> 
        <div><AddTask handleAdd={this.addTask} /></div>
        <Todolist 
        todos={this.state.tasks} 
          handledelete={this.taskdelete}
          handledone={this.taskdone}/>
      </div>
    )
  }
}

export default App