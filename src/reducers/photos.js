import { SET_PHOTOS } from '../actions/photos'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_PHOTOS:
      // not copy but CHANGE the array » so forget about .map!!!!
      return action.payload
    default:
      return state
  }

}