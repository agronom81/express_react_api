
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './data';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});