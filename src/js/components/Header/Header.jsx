import React, {Component} from 'react';
import classNames from 'classnames';

import Nav from '../Nav/Nav';

import grid from '../../../scss/app.scss';
import styles from './Header.css';

class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <section>
                    <Nav/>
                </section>
                <section className={grid.header}>
                    <div >
                        <h1>Meg Dahlgren</h1>
                        <h2>Front End Developer</h2>
                    </div>
                </section>
            </div>

        );
    }

}

export default Header


