import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const farmInitialState = {
  orders: []
};

export function farm(state = farmInitialState, action) {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_CUSTOMER:
      let filteredOrders = state.orders.filter(
        order => order.id !== action.payload.id
      );
      return {
        ...state,
        orders: filteredOrders
      };
    default:
      return state;
  }
}
