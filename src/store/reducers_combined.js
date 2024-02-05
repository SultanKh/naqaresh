import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  foodStore: reducer,
});

export default rootReducer;