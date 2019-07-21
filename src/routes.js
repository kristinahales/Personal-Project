import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Create from './components/Create/Create';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/inventory' component={Inventory}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/create' component={Create}/>
    </Switch>
);