import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         description:"",
         topic:"React"

      }
    }
    handlerUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    handlerDescription=(event)=>{
        this.setState({description:event.target.value})
    }
    handlerTopic=(event)=>{
        this.setState({topic:event.target.value})
    }
    handleSubmit=event=>{
        alert(`${this.state.username}`)
        event.preventDefault()
        
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>username</label>
            <input type="text" value={this.state.username} onChange={this.handlerUsername}></input>
            <label>description</label>
            <textarea type="text" value={this.state.description} onChange={this.handlerDescription}></textarea>
        </div>
        <div>
            <select value={this.state.topic} onChange={this.handlerTopic}>
                <option value="React">React</option>
                <option value="vue">vue</option>
                <option value="Angular">Angular</option>
                <option value="javascript">Javascript</option>
            </select>
        </div>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default Form