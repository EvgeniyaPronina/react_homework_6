import { createAction } from 'redux-actions';

import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = createAction(MOVE_ORDER_TO_CUSTOMER);
