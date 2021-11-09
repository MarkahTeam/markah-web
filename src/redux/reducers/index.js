/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { combineReducers } from 'redux';
import classes from './class';
import article from './article';
const reducer = combineReducers({
  classes,
  article,
});

export default reducer;