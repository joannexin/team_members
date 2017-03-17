import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Add from '../components/Add';
import Edit from '../components/Edit';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="add" component={Add}/>
    <Route path="edit" component={Edit}/>
  </Route>
</Router>
);
