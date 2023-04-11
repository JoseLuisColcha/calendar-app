import { combineReducers } from 'redux'
import { uiReducer } from './uiReducer'
import { calendarReducer } from './calendarReducer'
import { auhtReducer } from './authReducer'

export const rootReducer = combineReducers({
	ui: uiReducer,
	calendar: calendarReducer,
	auth: auhtReducer,
})
