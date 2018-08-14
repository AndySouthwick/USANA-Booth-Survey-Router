import {actionTypes} from './actions'

export const initialState = {
  languageObj: {},
reRender: false
}

export function reducer(state = initialState, action) {
  switch (action.type){
    case actionTypes.CHANGE_LANGUAGE:
      return{
        ...state,
        languageObj: action.payload,
        reRender: true
      }
    default:
      return state
  }
}