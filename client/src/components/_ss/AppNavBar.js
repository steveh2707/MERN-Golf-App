import React, { Component, Fragment } from "react";
import {
  // Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "../auth/RegisterModal";
import LoginModal from "../auth/LoginModal";
import Logout from "../auth/Logout";
import PrevRounds from "../PrevRounds";

class AppNavBar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <div className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </div>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    const SPVmode = (
      <Fragment>
        <NavItem>
          <PrevRounds />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <h1>{this.SPV}</h1>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Scorecard Calculator</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="al-auto" navbar>
              {this.props.SPV ? SPVmode : null}
              {isAuthenticated ? authLinks : guestLinks}
              <NavItem>
                <NavLink href="https://github.com/steveh2707/MERN-Golf-App">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            {/* </Collapse> */}
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavBar);
