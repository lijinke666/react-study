/**
 * @name Component 基类
 * 提供 setState 的方法 用于更新视图
 */
export class Component {
  state = {}
  constructor(props) {
    // props 子类 传进来的 props
    this.props = props
  }

  setState(state) {
    // TODO: 使用 new Proxy 
    console.log('state:', state)
  }
}

// 创建节点
export const createElement = (tag, props = {}, ...children) => {

  return {
    tag,
    attrs: props.attrs,
    children,
    key: props.key || null
  }
}

export default {
  Component,
  createElement
}