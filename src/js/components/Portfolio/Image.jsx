import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Portfolio.css';

export default class Image extends Component {

    render() {


        /*const className = `styles.${this.props.name}`;*/
        const className = styles[this.props.name];

        return (
            <div>
                <div className={classNames(styles.imgbox, className)}></div>
            </div>
        );

    }

}



