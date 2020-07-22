import React, { Fragment, Component } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import RouterLink from '../ReactMetismenuRouterLink';

import MetisMenu from 'react-metismenu';

const sidebarMenuContent = [
  {
    icon: 'pe-7s-safe',
    label: 'Dashboard',
    description:
      'This is a dashboard page example built using this template.',
    to: '/DashboardDefault'

  },
  {
    label: 'School Management',
    icon: 'pe-7s-culture',
    content: [
      {
        label: 'Add school',
        description:
          'With this page you can manage schools related issues!',
        to: '/dashboard/add-school'
      }
    ]
  },
  {
    label: 'Manage staff',
    icon: 'pe-7s-users',
    content: [
      {
        label: 'add staff',
        description:
          'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!',
        to: '/add-staff'
      },
      {
        label: 'all staffs',
        description:
          'A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.',
        to: '/AllStaffs'
      },
      {
        label: 'staff report',
        description:
          'Navigation menus are one of the basic building blocks for any web or mobile app.',
        to: '/NavigationMenus'
      } 
    ]
  },
  {
    label: 'Manage students',
    icon: 'pe-7s-users',
    content: [
      {
        label: 'Add a student',
        description:
          'Wide selection of cards with multiple styles, borders, actions and hover effects.',
        to: '/add-student'
      },
      {
        label: 'All students',
        description:
          'Wide selection of cards with multiple styles, borders, actions and hover effects.',
        to: '/All-students'
      },
      {
        label: 'Student report',
        description:
          'Wide selection of cards with multiple styles, borders, actions and hover effects.',
        to: '/Cards3'
      }
    ]
  },
  {
    label: 'General Report',
    icon: 'pe-7s-id',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/ListGroups'
  },
  {
    label: 'Presentation Blocks',
    icon: 'pe-7s-box2',
    content: [
      {
        label: 'Landing page',
        description: '',
        to: '/LandingPage'
      }
    ]
  },
  {
    label: 'My profile',
    icon: 'pe-7s-note2',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/ListGroups'
  },
  {
    label: 'Change password',
    icon: 'pe-7s-id',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/ListGroups'
  }
  ,
  {
    label: 'Logout',
    icon: 'pe-7s-right-arrow',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/'
  },
  
];

class SidebarMenu extends Component {
  render() {
    return (
      <Fragment>
        <PerfectScrollbar>
          <div className="sidebar-navigation">
            <div className="sidebar-header">
              <span>Navigation menu</span>
            </div>
            <MetisMenu
              content={sidebarMenuContent}
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
}

export default SidebarMenu;
