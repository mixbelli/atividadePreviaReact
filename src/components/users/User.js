import React, { Component } from "react";

export default class User extends Component {
  render() {
    const { name, email } = this.props.user;

    return (
      <div>
        {name} - {email}
      </div>
    );
  }
}
