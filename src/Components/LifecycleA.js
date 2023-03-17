import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "vishwas"
      }
      console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("compomentdidmount")
    }
  render() {
    console.log("render")
    return (
      <div>LifecycleA</div>
    )
  }
}

export default LifecycleA