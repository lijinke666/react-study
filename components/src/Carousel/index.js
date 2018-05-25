/**
 * @version 0.0.1
 * @name npm-component-project-template
 * @description by Dawdler
 * @author jinke.li
 */

import React, { PureComponent } from "react";
import "./index.less";

export default class Carousel extends PureComponent {
  state = {
    index:0,
    lock:false
  };
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.containerWidth = 600
  }
  render() {
    const {index} = this.state
    return (
      <>
      <div className="main">
        <ul className="container" onTransitionEnd={this.animateEnd} style={{
          transform:`translate3d(-${this.containerWidth * index}px,0,0)`
        }}>
        {
          this.props.children.map((item,i)=>{
            return (
              <li className="item" key={i}>{item}</li>
            )
          })
        }
        </ul>
      </div>
      <div>
      <button onClick={this.prev}>上一张</button>
      <button onClick={this.next}>下一张</button>
      </div>
      </>
    );
  }
  animateEnd = ()=> {
    this.setState({lock:false})
  }
  next = ()=>{
    let {index,lock} = this.state
    const len = this.props.children.length
    if(lock){
      return
    }
    this.setState({
      index: index === len - 1 ? 0 : ++index,
      lock:true
    })
  }
  prev = ()=>{
    let {index,lock} = this.state
    const len = this.props.children.length
    if(lock){
      return
    }
    this.setState({
      index: index === 0 ? len -1 : --index,
      lock:true
    })
  }
}
