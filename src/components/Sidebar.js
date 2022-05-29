import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './Sidebar.min.css';

export default class Sidebar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link onClick={() => this.closeMenu()} className="menu-item" to="#product">
          Products
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="#aboutus"
        >
          About Us
        </Link>
      </Menu>
    );
  }
}
