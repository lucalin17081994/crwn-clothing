//function that gets state object and action
//action has type and payload
//write a bunch of actions in reducer
//set initial state, just like in constructor

const INITIAL_STATE={
  currentUser:null
}
const userReducer=(state=INITIAL_STATE,action)=>{
  switch(action.type){//all reducers receive the same action
    case 'SET_CURRENT_USER':
      return{
        ...state,
        currentUser:action.payload
      }
    default://if the action does not match, return default state
      return state
  }
}
export default userReducer