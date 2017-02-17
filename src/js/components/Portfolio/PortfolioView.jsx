import React, { Component } from 'react';
import { connect } from 'react-redux';

import Image from './Image';

/*import { setProjects } from '../../actions/projectActions';*/

@connect((store) => {
    return {
        singlePageApps: store.projects.singlePageApps,
        emailTemplates: store.projects.emailTemplates,
    }
})


class PortfolioView extends Component {

    getItemDiv(item, i) {
        return (
            <div key={i}>
                <h3>{item.title}</h3>
                <Image name={item.name}/>
            </div>
        );
    }

    render() {
        const singlePageApps = this.props.singlePageApps;
        /*console.log(singlePageApps);*/
        let apps = [];
        for (let [index, value] of singlePageApps.entries()) {
            /*console.log(index, value);*/
            apps.push(this.getItemDiv(value, index));
        }
        return (
            <div>
                <h1>Featured Work</h1>
                {apps}
            </div>
        );
    }

}

export default PortfolioView
