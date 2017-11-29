import { createAction } from 'redux-actions'

import {
    MOVE_ORDER_TO_FARM,
    CREATE_ORDER,
} from '../const'

export const moveOrderToFarm = createAction(MOVE_ORDER_TO_FARM)
export const createOrder = createAction(CREATE_ORDER)