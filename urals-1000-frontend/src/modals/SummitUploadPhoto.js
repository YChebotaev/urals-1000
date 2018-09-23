import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { compose } from 'recompose'
import ImagesUploader from 'react-images-uploader'
import { withModal } from '../HOCs/withModal'
import { SUMMIT_PHOTO_UPLOAD } from '../constants/modalNames'
import { withSummit } from '../HOCs/withSummit'
import { summitShape } from '../prop-types';

class SummitUploadPhotoMarkup extends Component {
  static propTypes = {
    open: PropTypes.bool,
    props: PropTypes.object,
    modalClose: PropTypes.func,
    summit: summitShape
  }

  state = {
    file: '',
    uploaded: false
  }

  handleModalHide = () => {
    this.props.modalClose()
  }

  handleImageLoadEnd = (err, imageUrl) => {
    if (!err) {
      this.props.addImage(this.props.summit._id, imageUrl)
    }
  }

  handleImageDelete = (key, url) => {
    this.props.deleteImage(this.props.summit._id, url)
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
            url={`${process.env.REACT_APP_API_BASE}/summits/${this.props.summit._id}/uploadImage`}
            multiple={false}
            onLoadEnd={this.handleImageLoadEnd}
            deleteImage={this.handleImageDelete}
            headers={{ Authorization: `Bearer ${localStorage.getItem('bearerToken')}` }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleModalHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export const SummitUploadPhoto = compose(
  withModal(SUMMIT_PHOTO_UPLOAD),
  withSummit
)(SummitUploadPhotoMarkup)
