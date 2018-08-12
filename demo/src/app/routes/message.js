import React, { Component } from 'react'
import Message from "rc-message"

export default class message extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
  componentDidMount(){
    Message.success({
      content:"hello world"
  })
  }
}
