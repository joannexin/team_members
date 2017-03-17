import React from 'react';
import {Router, Route, browserHistory, hashHistory, IndexRoute} from 'react-router';

import App from '../components/App';

import Home from '../containers/Home';
import Add from '../containers/Add';
import Edit from '../containers/Edit';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="add" component={Add}/>
    <Route path="edit" component={Edit}/>
  </Route>
</Router>
);
