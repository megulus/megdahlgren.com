import { combineReducers } from 'redux';

import projectReducer from './projectReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
    projects: projectReducer,
    about: aboutReducer,
});