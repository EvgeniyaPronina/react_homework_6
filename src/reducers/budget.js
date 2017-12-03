import { MOVE_ORDER_TO_FARM, CREATE_ORDER } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

import { sortOrderFn } from './helpers';

const budgetInitialState = {
  profit: 0,
  sallersExpenses: 0,
  farmExpanse: 0,
  deliveryExpanse: 0
};

export function budget(state = budgetInitialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + action.payload.price,
        sallersExpenses: state.sallersExpenses + 20
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: +state.farmExpanse + 100
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: +state.deliveryExpanse + 20
      };
    default:
      return state;
  }
}
