import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/reset.css";
import "../css/base.css";

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      > 
        {this.props.children()}
      </div>
    )
  }
}
