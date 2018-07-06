import React, { Component } from 'react';
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
  pageSize = 3
  animateEndTime = 580
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
      },
      {
        color: '#52c41a',
        text: 'page4'
      },
      {
        color: 'pink',
        text: 'page5'
      }
    ],
    up: false
  };
  onMoveDown = () => {
    const data = [...this.state.data];
    const shift = data.pop();
    data.unshift(shift);
    this.setState({
      data
    });
  };
  onMoveUp = () => {
    const { up } = this.state;
    if (!up) {
      this.setState({ up: true }, () => {
        setTimeout(() => {
          this.setState({ up: false });
          const data = [...this.state.data];
          const shift = data.shift();
          data.push(shift);
          this.setState({
            data
          });
        }, this.animateEndTime);
      });
    }
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
    const { index, data, up } = this.state;

    const _data = data.slice(index,this.pageSize)
    return (
      <div className="container" ref={node => (this.node = node)}>
        {_data.map(({ color, text }, i) => {
          return (
            <div
              className={cls(
                'wrap',
                { active: i === 0 },
                { leave: up && (i === 0 || i === 1) },
                { lastLeave: up && i === _data.length - 1 }
              )}
              key={`animating-${Date.now()}-${i}`}
              style={{
                backgroundColor: color,
                zIndex: i + 1,
                transform: `translate3d(0,${200 - (_data.length - i) * 10}%,0)`,
                animationDelay: `${i * 0.07}s`
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
