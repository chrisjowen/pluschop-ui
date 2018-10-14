import { createStore, combineReducers } from "redux"
import authReducer from "./redux/reducers/authReducer"

const reducer = combineReducers({
    authReducer
})

const store = createStore(
    reducer
)

export default store;