import pieChartReducer from './pieChartReducer';
import scatterChartReducer from './scatterChartReducer';
import lineChartReducer from './lineChartReducer';
import barChartReducer from './barChartReducer';
import cardReducer from './cardReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  pieChartReducer,
  scatterChartReducer,
  lineChartReducer,
  barChartReducer,
  cardReducer
});

export default allReducers;
