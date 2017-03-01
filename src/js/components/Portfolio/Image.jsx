import React, {Component} from 'react';

import styles from './Portfolio.css';

export default class Image extends Component {

    render() {

        /*const className = `styles.${this.props.name}`;*/
        /*const className = styles[this.props.name];*/
        const src = require(`${this.props.src}`);


        return (
            <img className={styles.imgResponsive} src={src}></img>
        );

    }
}



