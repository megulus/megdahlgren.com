function reducer(state = {
    singlePageApps: [
        {
            title: 'Calorie Tracker',
            name: 'calorieTracker',
            img: './images/health-tracker-resize-50-comp.png',
            source: 'https://github.com/megulus/health-tracker',
            site: 'https://megulus.github.com/health-tracker',
            type: 'app',
        },
        {
            title: 'Neighborhood Map',
            name: 'neighborhoodMap',
            img: './images/nbhd-map-resize-50-comp.png',
            source: 'https://github.com/megulus/neighborhood_map',
            site: 'https://megulus.github.io/neighborhood_map',
            type: 'app',
        }
    ],
    emailTemplates: [
        {
            title: 'Email Template - Outlook 2011',
            name: 'outlook2011',
            img: './images/ol2011-vertical-allowed-1366.png',
            source: 'https://github.com/megulus/emailtemplates',
            site: null,
            type: 'template',
        },
        {
            title: 'Email Template - iPhone 6S Plus',
            name: 'iPhone6SPlus',
            img: './images/iphone6splus-vertical-allowed-1366.png',
            source: 'https://github.com/megulus/emailtemplates',
            site: null,
            type: 'template',
        },
        {
            title: 'Email Template - iPhone 6',
            name: 'iPhone6',
            img: './images/iphone6s-vertical-allowed-1366.png',
            source: 'https://github.com/megulus/emailtemplates',
            site: null,
            type: 'template',
        }
    ]
}, action) {
    

    return state;
}

export default reducer
