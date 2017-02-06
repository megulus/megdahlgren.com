import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppView from './components/AppView';
import PortfolioView from './components/PortfolioView';
import About from './components/About';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppView}>
            <IndexRoute component={PortfolioView}></IndexRoute>
            <Route path="about" name="about" component={About}></Route>
        </Route>
    </Router>,
    app
);


