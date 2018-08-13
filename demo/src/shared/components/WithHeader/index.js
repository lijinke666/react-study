import React, { Component } from "react";
import { getDisplayName } from "libs/component";

export default (title) => (WrappedComponent) => {
  return class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    render() {
      return (
        <>
          <div>{title}</div>
          <hr/>
          <WrappedComponent {...this.props} />
        </>
    )
    }
  };
}
