import React, {Component} from 'react';
import { connect } from 'react-redux';

import grid from '../../../scss/app.scss';
import styles from './About.css';

import Image from '../Portfolio/Image';

@connect((store) => {
    return {
        img: store.about.img,
        text: store.about.text,
    }
})

class About extends Component {

    render() {
        const text = this.props.text.map((item, i) => <p key={i}>{item}</p>);
        return (
            <div className={styles.about}>
                <h2>About Meg</h2>
                <div className={grid.sidebarL}>
                    <Image src={this.props.img} type="image"/>
                </div>
                <div>
                    {text}
                </div>
            </div>

        );
    }

}

export default About