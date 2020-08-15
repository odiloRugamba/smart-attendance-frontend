import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PrivateRoute  from './utils/PrivateRoute'

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages

import AddStaff from './example-pages/Staff/add-new-staff';
import AllStaffs from './example-pages/Staff/all-staffs';
import AllStudents from './example-pages/Student/all-students';
import login from './example-pages/Login';
import ForgetPassword from './example-pages/Forget-password';
import ResetPassword from './example-pages/Reset-password';
import Welcome from './example-pages/Welcome';
import StudentsByClass from './example-pages/Class/StudentsByClass';

const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const AddStudent = lazy(() => import('./example-pages/Student/add-new-student'));
const Profile = lazy(() => import('./example-pages/Profile'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const AddSchool = lazy(() => import('./example-pages/School/Add-new-school'));
const updateSchool = lazy(() => import('./example-pages/School/Update-school'));
const AllSchools = lazy(() => import('./example-pages/School/all-schools'));
const AddPermission = lazy(() => import('./example-pages/Permissions/add-permission'));
const AllPermission = lazy(() => import('./example-pages/Permissions/all-permissions'));
const AddClass = lazy(() => import('./example-pages/Class/add-class'));
const AllClasses = lazy(() => import('./example-pages/Class/all-classes'));
const AddNewStudent = lazy(() => import('./example-pages/Class/add-class-student'));
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
          <Redirect exact from="/" to="/dashboard" />
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
              '/add-school',
              '/add-permission',
              '/all-permissions',
              '/All-students',
              '/schools/:id/edit',
              '/all-schools',
              '/add-student',
              '/Profile',
              '/add-class',
              '/all-classes',
              '/classes/:id/students',
              '/classes/:id/add-student'
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
                  <PrivateRoute path="/All-students" component={AllStudents} />
                  <PrivateRoute path="/add-student" component={AddStudent} />
                  <PrivateRoute path="/Profile" component={Profile} />
                  <PrivateRoute path="/add-school" component={AddSchool} />
                  <PrivateRoute path="/schools/:id/edit" component={updateSchool} />
                  <PrivateRoute path="/classes/:id/students" component={StudentsByClass} />
                  <PrivateRoute path="/all-schools" component={AllSchools} />
                  <PrivateRoute path="/add-permission" component={AddPermission} />
                  <PrivateRoute path="/all-permissions" component={AllPermission} />
                  <PrivateRoute path="/add-class" component={AddClass} />
                  <PrivateRoute path="/all-classes" component={AllClasses} />
                  <PrivateRoute path="/classes/:id/add-student" component={AddNewStudent} />
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
