import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import {
  Redirect,
  Route,
  RouteProps
} from "react-router-dom";

type Props = Omit<RouteProps, 'render'> & {render: (uid: string) => JSX.Element};

const PrivateRoute = ({render, ...props}: Props) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  if (error) return <div>{error.message}</div>;
  if (loading) return null;
  if (!user) return <Redirect to="/signin" />
  return <Route {...props}>
    {render && render(user.uid)}
  </Route>
}

export default PrivateRoute;
