import React, { Component } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

export default class message extends Component {
  render() {
    return (
      <ReactJkMusicPlayer
        audioLists={[
          {
            name: '丑',
            singer: '草东没有派对',
            cover: 'https://www.lijinke.cn/music/1387583682387727.jpg',
            musicSrc: 'https://www.lijinke.cn/music/201711082.mp3'
          }
        ]}
        defaultPosition={{
          top: 300,
          left: 120
        }}
        playModeText={{
          order: '顺序播放',
          orderLoop: '列表循环',
          singleLoop: '单曲循环',
          shufflePlay: '随机播放'
        }}
        openText="打开"
        closeText="关闭"
        checkedText="开"
        unCheckedText="关"
        notContentText="暂无音乐"
        panelTitle="播放列表"
      />
    );
  }
}
