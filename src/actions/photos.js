import * as request from 'superagent'

export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    payload: photos
  }
}

export function getPhotosByAlbum(albumId) {
  return function (dispatch) {
    // fetch the photos from https://jsonplaceholder.typicode.com/photos?albumId=:albumId
    request(`https://jsonplaceholder.typicode.com/photos?${albumId}=:${albumId}`)
    // dispatch an action that is created using setPhotos
    .then(response => {
      dispatch(setPhotos(response.body))
    })
  }
}