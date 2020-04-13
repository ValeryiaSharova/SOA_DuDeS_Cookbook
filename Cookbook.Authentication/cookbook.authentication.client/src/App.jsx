import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '@/helpers/history';
import Login from './pages/Login/LoginPage';
import Registration from './pages/Registration/RegisterPage';
import Home from './pages/Home/HomePage';
import { PrivateRoute } from './sharedComponents/PrivateRoute';

const App = () => (
  <Router history={history}>
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center">Cookbook</h1>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/registration" exact component={Registration} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
);
export default App;
