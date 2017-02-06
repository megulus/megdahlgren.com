import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import Nav from './Nav';

class AppView extends Component {

    render() {
        const { location } = this.props;
        return (
            <div>
                <Nav location={location} />
                <Header/>
                {this.props.children}
            </div>
        );
    }

}

export default AppView