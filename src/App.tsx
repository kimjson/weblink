import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import SignIn from './components/public/SignIn';
import PrivateRoute from './components/base/PrivateRoute';
import Main from './components/private/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Weblink</h1>
        </header>
        <main role="main">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <PrivateRoute exact path="/" render={(uid: string) => <Main uid={uid} />} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
