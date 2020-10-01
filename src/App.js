import React, { Component } from "react";
import Users from "./components/users/Users";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allUsers: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();

    const allUsers = json.map(({ name, id, email }) => {
      return {
        id,
        name,
        email,
      };
    });

    this.setState({
      allUsers: allUsers,
    });
  }

  render() {
    const { allUsers } = this.state;
    return (
      <div className="container">
        <h1> Usuários </h1>
        <Header />
        <Users users={allUsers} />
        <Footer desenvolvedor="Michelle Belli" />
      </div>
    );
  }
}
