import {combineReducers} from 'redux';
import { i18nReducer } from 'react-redux-i18n';

const allReducers = combineReducers({
    i18n: i18nReducer    
});

export default allReducers
