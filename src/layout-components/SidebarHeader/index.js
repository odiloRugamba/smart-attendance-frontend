import React, { Fragment, Component } from 'react';

import { Link } from 'react-router-dom';

import projectLogo from '../../assets/images/react.svg';

class SidebarHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-sidebar--header">
          <div className="nav-logo">
            <Link
              to="/DashboardDefault"
              title="Smart project App">
              <i>
                <img
                  alt="Smart Project Aoo"
                  src={projectLogo}
                />
              </i>
              <span>SMART-PROJECT</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SidebarHeader;
