import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppView from './components/AppView';
import PortfolioView from './components/Portfolio/PortfolioView';
import About from './components/About/About';

import rootReducer from './reducers/index';

const app = document.getElementById('app');
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppView}>
                <IndexRoute component={PortfolioView}></IndexRoute>
                <Route path="about" name="about" component={About}></Route>
            </Route>
        </Router>
    </Provider>,
    app
);


