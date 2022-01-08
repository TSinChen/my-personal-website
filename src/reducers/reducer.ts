import { combineReducers } from 'redux'

import photoReducer from './photoReducer'

export const rootReducer = combineReducers({
  photo: photoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
