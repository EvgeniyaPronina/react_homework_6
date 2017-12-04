import { MOVE_ORDER_TO_FARM, CREATE_ORDER } from '../actions/marketTypes';

const marketInitialState = {
  orders: []
};

export default function market(state = marketInitialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_FARM:
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
