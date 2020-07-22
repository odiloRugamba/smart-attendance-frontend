import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ setUser, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => (
        localStorage.getItem('smartgate_token')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} {...rest} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }),
};

const mapStateToProps = state => (
    {
        // isAuthenticated  value is get from here
        isAuthenticated : state.auth.isAuthenticated 
    }
);
export default connect(mapStateToProps,null)(PrivateRoute);