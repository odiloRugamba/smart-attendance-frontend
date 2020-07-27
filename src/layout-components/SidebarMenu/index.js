import React, { Fragment, Component, useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import JwtDecode from 'jwt-decode';
import RouterLink from '../ReactMetismenuRouterLink';

import MetisMenu from 'react-metismenu';

const SupersidebarMenuContent = [
  {
    icon: 'pe-7s-safe',
    label: 'Dashboard',
    description:
      'This is a dashboard page example built using this template.',
    to: '/dashboard'

  },
  {
    label: 'School Management',
    icon: 'pe-7s-culture',
    content: [
      {
        label: 'Add school',
        description:
          'With this page you can manage schools related issues!',
        to: '/add-school'
      },
      {
        label: 'All schools',
        description:
          'With this page you can manage schools related issues!',
        to: '/all-schools'
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
    to: '/profile'
  },
  {
    label: 'Change password',
    icon: 'pe-7s-id',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/change-password'
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
const HeadsidebarMenuContent = [
  {
    icon: 'pe-7s-safe',
    label: 'Dashboard',
    description:
      'This is a dashboard page example built using this template.',
    to: '/dashboard'

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
    to: '/profile'
  },
  {
    label: 'Change password',
    icon: 'pe-7s-id',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/change-password'
  }
  
];
const TeacherSidebarMenuContent = [
  {
    label: 'School Management',
    icon: 'pe-7s-culture',
    content: [
      {
        label: 'Add school',
        description:
          'With this page you can manage schools related issues!',
        to: '/add-school'
      },
      {
        label: 'All schools',
        description:
          'With this page you can manage schools related issues!',
        to: '/all-schools'
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
    to: '/profile'
  },
  {
    label: 'Change password',
    icon: 'pe-7s-id',
    description:
      'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
    to: '/change-password'
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

function  SidebarMenu() {
    const [menu, setMenu ] = useState(TeacherSidebarMenuContent);

    const token = localStorage.getItem('smartgate_token')
    const { role } = JwtDecode(token);
    useEffect(() => {
      if(role === 'super-administrator') {
        setMenu(SupersidebarMenuContent);
      setMenu();
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
