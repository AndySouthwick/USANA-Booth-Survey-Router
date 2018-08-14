export const actionTypes =  {
  CHANGE_LANGUAGE: '[Language] The language has been changed',
}

export function changeLanguage(data) {
  return{
    type: actionTypes.CHANGE_LANGUAGE,
    payload: data
  }
}