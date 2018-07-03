import React, { PureComponent } from "react";
import Carousel from "app/components/Carousel";

export default class TestPage extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Carousel/>
    );
  }
  componentDidMount() {
  }
}
