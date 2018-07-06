import React, { PureComponent } from "react";
import {Link} from 'react-router-dom'

export default class TestPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Link to="/test1">效果1</Link>
        <Link to="/test2">效果2</Link>
        <Link to="/test3">效果3</Link>
      </>
    );
  }
}
