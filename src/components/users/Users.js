import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
