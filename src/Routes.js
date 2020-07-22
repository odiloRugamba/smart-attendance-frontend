import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PrivateRoute  from './utils/PrivateRoute'

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
const AddSchool = lazy(() => import('./example-pages/Add-school'));
const updateSchool = lazy(() => import('./example-pages/School/Update-school'));
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
              Please wait ...
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
              '/dashboard',
              '/add-staff',
              '/AllStaffs',
              '/dashboard/add-school',
              '/Pagination',
              '/Scrollable',
              '/All-students',
              '/update-school',
              '/UtilitiesHelpers',
              '/add-student',
              '/Profile'
            ]}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <PrivateRoute
                    path="/dashboard"
                    component={DashboardDefault}
                  />
                  <PrivateRoute path="/add-staff" component={AddStaff} />
                  <PrivateRoute path="/AllStaffs" component={AllStaffs} />
                  <PrivateRoute path="/NavigationMenus" component={NavigationMenus} />
                  <PrivateRoute path="/ProgressBars" component={ProgressBars} />
                  <PrivateRoute path="/Pagination" component={Pagination} />
                  <PrivateRoute path="/Scrollable" component={Scrollable} />
                  <PrivateRoute path="/All-students" component={AllStudents} />
                  <PrivateRoute path="/Icons" component={Icons} />
                  <PrivateRoute
                    path="/UtilitiesHelpers"
                    component={UtilitiesHelpers}
                  />
                  <PrivateRoute path="/add-student" component={AddStudent} />
                  <PrivateRoute path="/Profile" component={Profile} />
                  <PrivateRoute path="/dashboard/add-school" component={AddSchool} />
                  <PrivateRoute path="/update-school" component={updateSchool} />
                  <PrivateRoute path="/Popovers" component={Popovers} />
                  <PrivateRoute path="/Tooltips" component={Tooltips} />
                  <PrivateRoute path="/Tabs" component={Tabs} />
                  <PrivateRoute path="/RegularTables1" component={RegularTables1} />
                  <PrivateRoute path="/RegularTables4" component={RegularTables4} />
                  <PrivateRoute path="/FormsLayout" component={FormsLayout} />
                  <PrivateRoute path="/FormsControls" component={FormsControls} />
                  <PrivateRoute path="/ApexCharts" component={ApexCharts} />
                  <PrivateRoute path="/Maps" component={Maps} />
                  
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
