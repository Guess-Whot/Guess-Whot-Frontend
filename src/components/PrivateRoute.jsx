import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth/useAuth';

export function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
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
