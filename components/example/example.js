import React from "react";
import ReactDOM from "react-dom";
import Carousel from "../src/Carousel";

import "./example.less";

const Demo = () => (
  <div>
    <h2>轮播</h2>
    <Carousel>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Carousel>
  </div>
);

ReactDOM.render(<Demo />, document.getElementById("root"));
