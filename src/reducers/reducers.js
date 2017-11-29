import {
    MOVE_ORDER_TO_FARM,
    CREATE_ORDER,
} from '../const'
import {sortOrderFn} from './helpers'

const marketInitialState = {
    orders: []
}

const farmInitialState = {
    orders: []
}

export function market(state = marketInitialState, action) {
    switch (action.type) {
        case CREATE_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload ]
            }
        case MOVE_ORDER_TO_FARM:
            let sortedOrdres = [...state.orders].sort(sortOrderFn)
            const filteredOrders = sortedOrdres.filter((i) => {
                console.log(i)
                return i !== 0
            })
            console.log(filteredOrders)
            return {
                ...state,
                orders: filteredOrders
            }
        default:
            return state;
    }
}

export function farm(state = farmInitialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export function budget(state = [], action) {
return state
}

