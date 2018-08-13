import React, { PureComponent } from "react";
import { Divider, Button, message } from "antd";
import errorBoundary from "shared/components/ErrorBoundary";

import "./styles.less";

@errorBoundary
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div key="home" className="home">
        <Divider>
          所有 组件 demo
        </Divider>
        <Button onClick={()=> this.props.history.push('/test1')}>轮播图1</Button>
        <Button onClick={()=> this.props.history.push('/test2')}>轮播图2</Button>
        <Button onClick={()=> this.props.history.push('/test3')}>轮播图3</Button>
        <Button onClick={()=> this.props.history.push('/imageProcess')}>图片处理</Button>
        <Button onClick={()=> this.props.history.push('/message')}>消息提示</Button>
        <Button onClick={()=> this.props.history.push('/musicPlayer')}>音乐播放器</Button>
        <Button onClick={()=> this.props.history.push('/turntable')}>抽奖转盘</Button>

        <Divider>
        高阶组件
        </Divider>
        <Button onClick={()=> this.props.history.push('/error')}>错误边界</Button>
        <Button onClick={()=> this.props.history.push('/withHeader')}>添加头部</Button>
      </div>
    );
  }
}
