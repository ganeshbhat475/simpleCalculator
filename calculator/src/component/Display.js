import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    let value = this.props.value.length >= 10 ? this.props.value.slice(0, 10) : this.props.value;
    return (
      <div className="component-display">
        <div>{value}</div>
      </div>
    );
  }
}
