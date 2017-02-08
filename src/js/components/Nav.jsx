import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';

import grid from '../../scss/app.scss';

class Nav extends Component {

    render() {
        return (
            <nav>
                <div>
                    <ul>
                        <li className={grid.navL}>
                            <IndexLink activeClassName="active" onlyActiveOnIndex={true} to="/">Portfolio</IndexLink>
                        </li>
                        <li className={grid.navR}>
                            <Link activeClassName="active" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }


}

export default Nav
