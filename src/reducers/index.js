import { combineReducers } from 'redux'
import {market, farm, budget} from './reducers'

const rootReducer = combineReducers({
   market,
    farm,
    budget
})

export default rootReducer

