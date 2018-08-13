import React, { Component } from 'react'
import {Button} from "antd"
import errorBoundary from "shared/components/ErrorBoundary";

@errorBoundary
export default class Error extends Component {
  createError = ()=>{
    throw new Error('error!')
  }
  render() {
    return (
      <Button onClick={this.createError}>触发报错</Button>
    )
  }
}
