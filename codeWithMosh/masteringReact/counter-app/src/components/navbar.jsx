import React, { Component } from "react";

//Stateless Functional Component (shortcut sfc)
const NavBar = ({ totalCounters }) => {
  // Destructuring Arguments - Props object
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

//As a class
/*
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
*/
