import React from 'react';
import ModalVideo from 'react-modal-video'

import img from '../../../../../src/resources/images/youtube.png';
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
      <div style = {{display: 'flex'}}>
        <ModalVideo 
          channel='youtube' 
          isOpen={this.state.isOpen} 
          videoId={this.props.src} 
          onClose={() => this.setState({isOpen: false})}/>
        <button style = {{border: 'none', borderRadius: '45px', margin: '5px auto'}} onClick={this.openModal}>
          <img src = {img} alt = "youtube video"></img>
          </button>
      </div>
    )
  }
};

export default AuthorVideo;