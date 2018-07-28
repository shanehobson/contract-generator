import React from 'react';
import {Component} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

class AppRouter extends Component {

  componentDidMount() {
    document.title = "Loader Gallery";
  }

  render() {
    return (      
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact={true} />
            </Switch>
          </div>
        </Router>
    );
  }
}
  
export default AppRouter;
