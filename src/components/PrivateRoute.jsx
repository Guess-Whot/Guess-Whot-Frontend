import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export function PrivateRoute({ children, ...rest }) {
  let auth = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.currentUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
