const initialState = {}

export default function AppReducer (state, action) {

  if (state === undefined) {
    return initialState
  }

  switch (action.type){
    case ("CHECKED"):
      return {
        checked: true
      }
    case ("UNCHECKED"):
      return {
        checked: false
      }
    case ("CONFIRMED"):
      return Object.assign({},state,{confirmed:true})
    default:
      return state
  }


}
