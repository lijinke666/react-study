/**
 * ReactDOM 的 render 实现
 * @param {*} vnode jsx 虚拟 node 会转化成 React.createElement()
 * @param {*} container 挂载的节点
 */
const render = (vnode, container) => {
  console.log(vnode)

  // 如果节点是 string 或 number 类型 直接 渲染  
  if ( typeof vnode === 'string' || typeof vnode === 'number' ) {
      const textNode = document.createTextNode( vnode );
      return container.appendChild( textNode );
    }
}

export default {
  render
}