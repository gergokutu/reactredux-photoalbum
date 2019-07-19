// declare a variable and put it into the case...
// and typos are corrected »
// because the variable always use the same string
// but use the good strings in the variable »
// imagine more exports »
// export const ADD_ALBUMS = 'ADD_ALBUM' »
// it would confuses the reducer »
// diff variables with the very same string
export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'

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

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    // it's already a array!!!!!
    payload: albums
  }
}