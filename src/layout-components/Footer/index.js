import React, { Fragment } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <Fragment>
      <div className="app-footer text-black-50">
        <div className="app-footer--first">
          <Nav>
            <NavItem>
              <NavLink
                href="#/"
                className="rounded-sm"
                >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#/"
                className="rounded-sm"
                >
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="app-footer--second">
          <span>Smart Project</span> ©
          2020 - crafted with <span className="text-danger px-1">❤</span> by{' '}
          <a href="#"  title="Emmy Karangwa $ Odilo Rugamba">
           Smart Project
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
