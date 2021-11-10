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
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function AppNavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = props.auth;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const authLinks = (
    <Fragment>
      <NavItem>
        <NavLink className="pt-1 pb-0" onClick={handleClick} href="#">
          <Avatar sx={{ width: 33, height: 33, bgcolor: deepOrange[500] }}>
            {user ? user.name[0] : null}
          </Avatar>
          <Popover
            anchorEl={anchorEl}
            id={id}
            open={open}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {user ? (
              <Typography sx={{ p: 1 }}>
                User: {user.name}
                <br />
                Email: {user.email}
              </Typography>
            ) : null}
          </Popover>
        </NavLink>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
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
                  <Tooltip title="GitHub Repository">
                    <GitHubIcon />
                  </Tooltip>
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
