import React from 'react';
import ModalVideo from 'react-modal-video'

import '../../../../../../node_modules/react-modal-video/scss/modal-video.scss';

class AuthorVideo extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }
  render () {
    return (
      <div>
        <ModalVideo 
          channel='youtube' 
          isOpen={this.state.isOpen} 
          videoId={this.props.src} 
          onClose={() => this.setState({isOpen: false})}/>
        <button onClick={this.openModal}>Open video</button>
      </div>
    )
  }
};

export default AuthorVideo;