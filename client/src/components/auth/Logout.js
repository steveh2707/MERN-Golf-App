import React, { Component, Fragment } from "react";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href="#">
          <Tooltip title="Logout">
            <LogoutIcon />
          </Tooltip>
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
