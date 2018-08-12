import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactImageProcess from 'react-image-process';

const onComplete = data => {
  /*eslint-disable*/
  console.log('data:', data);
  /*eslint-enable */
};

export default class imageProcess extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <>
        <ReactImageProcess mode="base64" onComplete={onComplete}>
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
        <ReactImageProcess mode="filter" filterType="vintage">
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
        <ReactImageProcess mode="filter" filterType="blackWhite">
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
        <ReactImageProcess mode="filter" filterType="relief">
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
        <ReactImageProcess
          mode="compress"
          quality={0.2}
          onComplete={onComplete}
        >
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
        <ReactImageProcess mode="rotate" rotate={30} onComplete={onComplete}>
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
        <ReactImageProcess
          mode="waterMark"
          waterMarkType="text"
          waterMark={'李金珂'}
          fontBold={false}
          fontSize={20}
          fontColor="#396"
          coordinate={[10, 20]}
        >
          <img src={require('images/nande.jpg')} />
        </ReactImageProcess>
      </>
    );
  }
}
