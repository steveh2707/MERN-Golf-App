import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";

function AppNavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = props.auth;

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
    <NavLink href="/PreviousRounds" style={{ minWidth: "150px" }}>
      Previous Rounds
    </NavLink>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-1">
        <Container>
          <NavbarBrand href="/">Scorecard Calculator</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              {props.SPV ? null : SPVmode}
            </Nav>
            <Nav className="al-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
              <NavItem>
                <NavLink href="https://github.com/steveh2707/MERN-Golf-App">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavBar);
