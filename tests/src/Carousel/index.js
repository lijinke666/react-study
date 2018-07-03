import React, { Component } from 'react';
import ReactDom from 'react-dom';
import cls from 'classnames';
import AlloyFinger from 'alloyfinger';
import './styles.less';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handle = null;
    this.touchType = {
      down: 'DOWN',
      up: 'UP'
    };
  }
  state = {
    index: 0,
    data: [
      {
        color: '#396',
        text: 'page1'
      },
      {
        color: '#F63',
        text: 'page2'
      },
      {
        color: '#06a',
        text: 'page3'
      }
    ]
  };
  onMoveDown = () => {
    console.log('down');
    this.setState({
      index: this.state.index - 1
    });
  };
  onMoveUp = () => {
    console.log('up');
    const data = [...this.state.data];
    const shift = data.pop()
    data.unshift(shift)
    console.log(data)
    this.setState({
      data
    })
  };
  onSwipe = direction => {
    const _direction = direction.toUpperCase();
    switch (_direction) {
      case this.touchType['down']:
        this.onMoveDown();
        break;
      case this.touchType['up']:
        this.onMoveUp();
        break;
      default:
        this.onMoveUp();
    }
  };
  render() {
    const { index, data } = this.state;
    console.log(index);
    return (
      <div className="container" ref={node => (this.node = node)}>
        {data.map(({ color, text }, i) => {
          return (
            <div
              className={cls('wrap',{active})}
              key={i}
              style={{
                backgroundColor: color,
                zIndex: i + 1,
                bottom: `${i * 10}%`
              }}
            >
              <span className="text">{text}</span>
            </div>
          );
        })}
      </div>
    );
  }
  move = direction => {
    console.log('swipe:', direction);
  };
  componentDidMount() {
    this.handle = new AlloyFinger(this.node, {
      swipe: evt => {
        this.onSwipe(evt.direction);
      }
    });
  }
  componentWillMount() {
    Reflect.deleteProperty(this, 'handle');
  }
}
