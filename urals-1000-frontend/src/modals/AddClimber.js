import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose } from 'recompose';
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import ImagesUploader from 'react-images-uploader'
import DatePicker from 'react-16-bootstrap-date-picker'
import { concat, without } from 'lodash'
import { withModal } from '../HOCs/withModal'
import { ADD_CLIMBER } from '../constants/modalNames'
import { withSummit } from '../HOCs/withSummit'

class AddClimberMarkup extends Component {
  static propTypes = {
    open: PropTypes.bool,
    props: PropTypes.object,
    modalClose: PropTypes.func
  }

  state = {
    date: new Date().toISOString(),
    comment: '',
    imageUrls: []
  }

  handleModalHide = () => {
    this.props.modalClose()
    this.setState({
      date: new Date().toISOString(),
      comment: '',
      imageUrls: []
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addClimber(
      this.props.summit._id,
      this.state
    )
    this.handleModalHide()
  }

  handleDateChange = date => {
    this.setState({
      date
    })
  }

  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    })
  }

  handleImageLoadEnd = (err, imageUrl) => {
    if (!err) {
      // this.props.addImage(this.props.summit._id, imageUrl)
      this.setState({
        imageUrls: concat(this.state.imageUrls, imageUrl)
      })
    }
  }

  handleImageDelete = (key, url) => {
    // this.props.deleteImage(this.props.summit._id, url)
    this.setState({
      imageUrls: without(this.state.imageUrls, url)
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
          <Modal.Title>Отметить восхождению</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="1a4da328-48b0-42f5-9325-0201e7d170e8" onSubmit={this.handleFormSubmit}>
            <FormGroup>
              <ControlLabel>Дата восхождения</ControlLabel>
              <DatePicker
                value={this.state.date}
                onChange={this.handleDateChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Комментарий к восхождению</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={this.state.comment}
                onChange={this.handleCommentChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Фотографии восхождения</ControlLabel>
              <ImagesUploader
                url={`${process.env.REACT_APP_API_BASE}/summits/${this.props.summit._id}/uploadImage`}
                multiple
                onLoadEnd={this.handleImageLoadEnd}
                deleteImage={this.handleImageDelete}
                headers={{ Authorization: `Bearer ${localStorage.getItem('bearerToken')}` }}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            bsClass="primary"
            form="1a4da328-48b0-42f5-9325-0201e7d170e8"
          >Сохранить</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export const AddClimber = compose(
  withModal(ADD_CLIMBER),
  withSummit
)(AddClimberMarkup)
