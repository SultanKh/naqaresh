import reducer from './reducer'
import rootReducer from './reducers_combined'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: reducer,
})