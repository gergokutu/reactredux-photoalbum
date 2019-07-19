import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'

import { connect } from 'react-redux'
import { helloWorld } from '../actions/test'

class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.setState({ albums: response.body }))

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
      this.props.helloWorld('Alice', 'Seriously Alice')
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  }
}

// export default connect()(AlbumsListContainer)
// binding action creators with connect
export default connect(null, { helloWorld: helloWorld })(AlbumsListContainer)