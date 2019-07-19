import * as React from 'react'
// import * as request from 'superagent'
import AlbumsList from './AlbumsList'

import { connect } from 'react-redux'
// import { helloWorld } from '../actions/test'
// import { addAlbum } from '../actions/albums'
import { setAlbums } from '../actions/albums'
import { getAlbums } from '../actions/albums'


// const sleep = time => new Promise(
//   resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    // request('https://jsonplaceholder.typicode.com/albums')
      // .then(response => {
      //   const {body} = response
      //   body.map(album => this.props.addAlbum(album.id, album.title))
      // })
    // // not needed anymore because of getAlbums()
    // request('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => {
    //     return this.props.setAlbums(response.body)
    //   })
    
    // gets albums, if they are found, .then use setAlbums to put them in Redux
    this.props.getAlbums()
      
      // called from test.js
      // helloWorld has to be called as a function
      // better to put it into a separate variable
      // and dispatch that
      // in this case params shoould be strings...
      // ...you do not have to declare them
      // const action = helloWorld('anything', 'other anything')
      // this.props.dispatch(action)
      
      // dispatch is not necessary like above
      // If we bind action creators using connect...
      // this.props.dispatch is no longer available.
      // to use this we can also correct export at the bottom
      // this.props.helloWorld('Alice', 'Seriously Alice')
      
    // this.props.addAlbum(5, 'Enjoying sunshine')
    // this.props.addAlbum(10, 'Having fun in the US')

    // sleep(2000)
    //   .then(message => this.props.addAlbum(1, message))

    // sleep(3000)
    //   .then(message => this.props.addAlbum(2, message))

    // sleep(2000)
    //   .then(message => this.props.setAlbums([
    //     {
    //       id: 1,
    //       title: message
    //     },
    //     {
    //       id: 2,
    //       title: 'This is the second album'
    //     },
    //     {
    //       id: 3,
    //       title: 'The last album'
    //     }
    //   ]))
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

// export default connect()(AlbumsListContainer)
// binding action creators with connect
// export default connect(null, { helloWorld: helloWorld })(AlbumsListContainer)
// export default connect(null, { addAlbum: addAlbum })(AlbumsListContainer)
// export default connect(mapStateToProps, { addAlbum })(AlbumsListContainer)
// export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)
export default connect(mapStateToProps, { setAlbums, getAlbums })(AlbumsListContainer)