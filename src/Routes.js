import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages

import AddStaff from './example-pages/Add-staff';
import AllStaffs from './example-pages/All-staff';
import NavigationMenus from './example-pages/NavigationMenus';
import ProgressBars from './example-pages/ProgressBars';
import Pagination from './example-pages/Pagination';
import Scrollable from './example-pages/Scrollable';
import AllStudents from './example-pages/All-students';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import FormsLayout from './example-pages/FormsLayout';
import FormsControls from './example-pages/FormsControls';
import login from './pages/Login';
import ForgetPassword from './pages/Forget-password';
import ResetPassword from './pages/Reset-password';
import Welcome from './pages/Welcome';

const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const AddStudent = lazy(() => import('./example-pages/Add-student'));
const Profile = lazy(() => import('./example-pages/Profile'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Carousels = lazy(() => import('./example-pages/Carousels'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tooltips = lazy(() => import('./example-pages/Tooltips'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
            <div className="w-50 mx-auto">
              Please wait while we load the live preview examples
            </div>
          </div>
        }>
        <Switch>
          <Redirect exact from="/" to="/LandingPage" />
          <Route path={['/LandingPage',
              '/login', '/forget-password', '/reset', '/welcome']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/LandingPage" component={LandingPage} />
                </motion.div>

              </Switch>
            </PresentationLayout>
            <Route path="/login" component={login} />
            <Route path="/forget-password" component={ForgetPassword} />
            <Route path="/reset" component={ResetPassword} />
            <Route path="/welcome" component={Welcome} />
          </Route>

          <Route
            path={[
              '/DashboardDefault',
              '/add-staff',
              '/AllStaffs',
              '/NavigationMenus',
              '/ProgressBars',
              '/Pagination',
              '/Scrollable',
              '/All-students',
              '/Icons',
              '/UtilitiesHelpers',
              '/add-student',
              '/Profile',
              '/Modals',
              '/Notifications',
              '/Carousels',
              '/Popovers',
              '/Tooltips',
              '/Tabs',
              '/RegularTables1',
              '/RegularTables4',
              '/FormsLayout',
              '/FormsControls',
              '/ApexCharts',
              '/Maps'
            ]}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route
                    path="/DashboardDefault"
                    component={DashboardDefault}
                  />
                  <Route path="/add-staff" component={AddStaff} />
                  <Route path="/AllStaffs" component={AllStaffs} />
                  <Route path="/NavigationMenus" component={NavigationMenus} />
                  <Route path="/ProgressBars" component={ProgressBars} />
                  <Route path="/Pagination" component={Pagination} />
                  <Route path="/Scrollable" component={Scrollable} />
                  <Route path="/All-students" component={AllStudents} />
                  <Route path="/Icons" component={Icons} />
                  <Route
                    path="/UtilitiesHelpers"
                    component={UtilitiesHelpers}
                  />
                  <Route path="/add-student" component={AddStudent} />
                  <Route path="/Profile" component={Profile} />
                  <Route path="/Modals" component={Modals} />
                  <Route path="/Notifications" component={Notifications} />
                  <Route path="/Carousels" component={Carousels} />
                  <Route path="/Popovers" component={Popovers} />
                  <Route path="/Tooltips" component={Tooltips} />
                  <Route path="/Tabs" component={Tabs} />
                  <Route path="/RegularTables1" component={RegularTables1} />
                  <Route path="/RegularTables4" component={RegularTables4} />
                  <Route path="/FormsLayout" component={FormsLayout} />
                  <Route path="/FormsControls" component={FormsControls} />
                  <Route path="/ApexCharts" component={ApexCharts} />
                  <Route path="/Maps" component={Maps} />
                  
                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
