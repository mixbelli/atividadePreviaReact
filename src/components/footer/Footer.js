import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { desenvolvedor } = this.props;
    return (
      <div>
        <hr />
        <span>
          Esse exemplo foi desenvolvido por {desenvolvedor.toUpperCase()} - @mix
          {desenvolvedor.slice(9).toLowerCase()}
        </span>
      </div>
    );
  }
}
