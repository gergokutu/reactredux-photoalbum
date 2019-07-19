export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      // with Object Literal Property Value Shorthand
      id,
      title
    }
  }
}