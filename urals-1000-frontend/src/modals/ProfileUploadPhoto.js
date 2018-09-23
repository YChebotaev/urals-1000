import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { compose } from 'recompose'
import ImagesUploader from 'react-images-uploader'
import { withModal } from '../HOCs/withModal'
import { PROFILE_PHOTO } from '../constants/modalNames'
import { withProfile } from '../HOCs/withProfile'
import { profileShape } from '../prop-types';

class ProfileUploadPhotoMarkup extends Component {
  static propTypes = {
    open: PropTypes.bool,
    props: PropTypes.object,
    modalClose: PropTypes.func,
    profile: profileShape
  }

  state = {
    imageUrl: '',
    uploaded: false
  }

  handleModalHide = () => {
    this.props.modalClose()
  }

  handleModalSave = () => {
    this.props.updateProfileImage(this.props.profile._id, this.state.imageUrl)
    this.props.modalClose()
    this.setState({
      imageUrl: '',
      uploaded: false
    })
  }

  handleImageLoadEnd = (err, imageUrl) => {
    if (!err) {
      this.setState({
        imageUrl,
        uploaded: true
      })
    } else {
      this.setState({
        imageUrl: '',
        uploaded: false
      })
    }
  }

  handleImageDelete = (key, imageUrl) => {
    this.setState({
      imageUrl: '',
      uploaded: false
    })
  }

  render() {
    return (
      <Modal
        show={this.props.open}
        onHide={this.handleModalHide}
        container={this}
      >
        <Modal.Header>
          <Modal.Title>Загрузить фотографию вершины</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImagesUploader
            url={`${process.env.REACT_APP_API_BASE}/profile/${this.props.profile._id}/uploadImage`}
            multiple={false}
            onLoadEnd={this.handleImageLoadEnd}
            deleteImage={this.handleImageDelete}
            headers={{ Authorization: `Bearer ${localStorage.getItem('bearerToken')}` }}
          />
        </Modal.Body>
        <Modal.Footer>
          {
            this.state.uploaded ? (
              <Button bsStyle="primary" onClick={this.handleModalSave}>Сохранить</Button>
            ) : (
              <Button onClick={this.handleModalHide}>Закрыть</Button>
            )
          }
        </Modal.Footer>
      </Modal>
    )
  }
}

export const ProfileUploadPhoto = compose(
  withModal(PROFILE_PHOTO),
  withProfile
)(ProfileUploadPhotoMarkup)
