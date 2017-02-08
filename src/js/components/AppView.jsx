import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Nav from './Nav';

import grid from '../../scss/app.scss';

class AppView extends Component {

    render() {
        const { location } = this.props;
        return (
            <div className={grid.containerElement}>
                <Nav location={location} />
                <Header/>
                {this.props.children}
            </div>
        );
    }

}

export default AppView