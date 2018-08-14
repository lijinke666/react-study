import React from "react";
import { Spin } from "antd"

//反向继承
export default (loading)=> (WrappedComponent)=> {
  return class HOC extends WrappedComponent {
    render() {
      if(loading(this.state)){
        return (
          <Spin tip="加载中" size="large">
            {super.render()}
          </Spin>
        )
      }else{
        return super.render()
      }
    }
  };
}