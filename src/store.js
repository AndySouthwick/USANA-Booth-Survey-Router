import {createStore, compose }from 'redux'

import {reducer, initialState} from './reducer'

export default createStore(
  reducer,
  initialState,

  compose(
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)