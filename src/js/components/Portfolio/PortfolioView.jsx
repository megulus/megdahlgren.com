import React, {Component} from 'react';
import {connect} from 'react-redux';

import Image from './Image';

import grid from '../../../scss/app.scss';


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
        return (
            <div key={i} className={className}>
                <h3>{item.title}</h3>
                <Image type={item.type} src={item.img}/>
            </div>
        );
    }

    render() {
        const apps = this.getListOfDivs(this.props.singlePageApps);
        const templates = this.getListOfDivs(this.props.emailTemplates);
        return (
             <div>
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
