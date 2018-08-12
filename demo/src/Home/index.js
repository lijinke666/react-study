import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Divider, Button, message, Spin } from "antd";
import errorBoundary from "shared/components/ErrorBoundary";

import sayHello from "./action";
import "./styles.less";

/**
 * 这里绑定 你 自己的 action
 * 每一个路由 对应一个 action 和 reducer  好维护,直观
 * 这里用到了 类的修饰器 比 传统的那种写法 方便直观一些
 */
@connect(
  ({ HomeReducer }) => ({
    data: HomeReducer.data,
    loading: HomeReducer.loading
  }),
  dispatch =>
    bindActionCreators(
      {
        sayHello
      },
      dispatch
    )
)
@errorBoundary
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  goGithub = url => {
    message.info("Thank you!");
    location.href = url;
  };
  render() {

    return (
      <div key="home" className="home">
        <Divider>
          所有 组件 demo
        </Divider>
        <Button onClick={()=> this.props.history.push('/test1')}>轮播图1</Button>
        <Button onClick={()=> this.props.history.push('/test2')}>轮播图2</Button>
        <Button onClick={()=> this.props.history.push('/test3')}>轮播图3</Button>
        <Button onClick={()=> this.props.history.push('/test4')}>图片处理</Button>
      </div>
    );
  }
  componentDidMount() {
    this.props.sayHello();
  }
}
