import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';

class Nav extends Component {

    render() {
        return (
            <nav>
                <div>
                    <ul>
                        <li>
                            <IndexLink activeClassName="active" onlyActiveOnIndex={true} to="/">Portfolio</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName="active" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }


}

export default Nav
