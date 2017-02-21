import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Portfolio.css';

export default class Image extends Component {

    render() {

        /*const className = `styles.${this.props.name}`;*/
        /*const className = styles[this.props.name];*/
        const src = require(`${this.props.src}`);
        const imgModClass = this.props.type === 'template'
            ? styles.template
            : styles.nonTemplate;

        return (
            <div className={classNames(styles.imgbox, imgModClass)}>
                <img className={styles.imgResponsive} src={src}></img>
            </div>
        );

    }
}



