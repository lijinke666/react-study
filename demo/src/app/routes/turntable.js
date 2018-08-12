import React, { Component } from 'react';
import ReactTurntable from 'react-turntable';
import "react-turntable/assets/index.css"

export default class turntable extends Component {
  render() {
    const prizes = [
      '杜蕾斯',
      '魅族16',
      '小米',
      'iphonex',
      '卫龙',
      '哈哈'
    ];

    const options = {
      prizes,
      width: 500,
      height: 500,
      primaryColor: '#83AF9B',
      secondaryColor: '#C8C8A9',
      fontStyle: {
        color: '#fff',
        size: '20px',
        fontVertical: true,
        fontFamily: 'Microsoft YaHei'
      },
      speed: 1000,
      duration: 5000,
      clickText: '抽奖',
      onComplete(prize) {
        alert(`奖品:${prize}`);
      }
    };
    return (
      <div
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          display: 'flex'
        }}
      >
        <ReactTurntable {...options} />
      </div>
    );
  }
}
