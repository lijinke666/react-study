import React, { Component } from 'react'
import withHeader from "shared/components/WithHeader"

@withHeader('我是头部')
export default class Header extends Component {
  render() {
    return (
      <div>
        我是内容
      </div>
    )
  }
}
