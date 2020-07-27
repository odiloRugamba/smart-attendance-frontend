import React, { Fragment, Component, useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import JwtDecode from 'jwt-decode';
import RouterLink from '../ReactMetismenuRouterLink';

import MetisMenu from 'react-metismenu';
import {SupersidebarMenuContent, HeadsidebarMenuContent, TeacherSidebarMenuContent } from './SideBarMenus'; 


function  SidebarMenu() {
    const [menu, setMenu ] = useState(TeacherSidebarMenuContent);

    if(!localStorage.getItem('smartgate_token')) {
      window.location.replace('/login')
    }
    const token = localStorage.getItem('smartgate_token')
    const { role } = JwtDecode(token);
    useEffect(() => {
      if(role === 'super-administrator') {
        setMenu(SupersidebarMenuContent);
      } else if(role === 'teacher') {
        setMenu(TeacherSidebarMenuContent);
      } else if (role === 'HEAD') {
        setMenu(HeadsidebarMenuContent);
      } else {
        console.log('Who are u mn?');
      }
    }, []);
    return (
      <Fragment>
        <PerfectScrollbar>
          <div className="sidebar-navigation">
            <div className="sidebar-header">
              <span>Navigation menu</span>
            </div>

            <MetisMenu
              content={menu}
              LinkComponent={RouterLink}
              activeLinkFromLocation
              iconNamePrefix=""
              noBuiltInClassNames={true}
              classNameItemActive="active"
              classNameIcon="sidebar-icon"
              iconNameStateVisible="sidebar-icon-indicator"
              iconNameStateHidden="sidebar-icon-indicator"
              classNameItemHasVisibleChild="submenu-open"
              classNameItemHasActiveChild="active"
              classNameStateIcon="pe-7s-angle-down"
            />
          </div>
        </PerfectScrollbar>
      </Fragment>
    );
  }

export default SidebarMenu;
