import React, {Component} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Image from './Image';

import grid from '../../../scss/app.scss';
import styles from './Portfolio.css'

@connect((store) => {
    return {
        singlePageApps: store.projects.singlePageApps,
        emailTemplates: store.projects.emailTemplates,
    }
})


class PortfolioView extends Component {

    getListOfDivs(list) {
        const divs = [];
        for (let [index, value] of list.entries()) {
            divs.push(this.getItemDiv(value, index));
        }
        return divs;
    }

    getItemDiv(item, i) {
        const name = 'column' + ((i % 3) + 1);
        const className = grid[name];
        const site = item.site
            ? <a href={item.site} target="_blank">site</a>
            : null;
        const imgModClass = item.type === 'template'
            ? styles.template
            : styles.nonTemplate;
        return (
            <div key={i} className={className}>
                <h3>{item.title}</h3>
                <div className={classNames(styles.imgbox, imgModClass)}>
                    <Image type={item.type} src={item.img}/>
                </div>
                <a href={item.source} target="_blank">source code</a>
                {'\u2003'}
                {site}
            </div>
        );
    }

    render() {
        const apps = this.getListOfDivs(this.props.singlePageApps);
        const templates = this.getListOfDivs(this.props.emailTemplates);
        return (
             <div className={styles.portfolio}>
                <div>
                    <h2>Single Page Apps</h2>
                    {apps}

                </div>
                <div>
                    <h2 className={grid.row}>Email Templates</h2>
                    {templates}
                </div>
            </div>
        );
    }

}

export default PortfolioView
