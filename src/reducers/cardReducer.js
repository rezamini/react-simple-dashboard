import { SET_CARD_VALUES } from '../actions'

const initialState = {
  totalUsers: 0,
  totalTimeSpent: 0,
  mostFreqUser: '',
  mostFreqUserCount: 0,
  lessFreqUser: '',
  lessFreqUserCount: 0,
}

const cardReducer = (state = initialState, action) => {
  switch(action.type){

    case SET_CARD_VALUES:
      return Object.assign({}, state, {
        totalUsers: action.payload['totalUsers'],
        totalTimeSpent: action.payload['totalTimeSpent'],
        mostFreqUser: action.payload['mostFreqUser'],
        mostFreqUserCount: action.payload['mostFreqUserCount'],
        lessFreqUser: action.payload['lessFreqUser'],
        lessFreqUserCount: action.payload['lessFreqUserCount'],
      })
    default:
        return state;
  }
}

export default cardReducer;
