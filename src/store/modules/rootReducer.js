/**
 * Este arquivo serve para "combinar" todos os reducers para
 * facilitar a importação no store.js
 */
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
