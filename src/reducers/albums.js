import { ADD_ALBUM } from '../actions/albums'
import { SET_ALBUMS } from '../actions/albums'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_ALBUM:
      return [...state, action.payload]
    case SET_ALBUMS:
      // not copy but CHANGE the array » so forget about .map!!!!
      return action.payload
    default:
      return state
  }

}