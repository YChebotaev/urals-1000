import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { summitShape } from '../prop-types'
import { 
  PageHeader,
  Carousel,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import { isEmpty } from 'lodash'
import { withSummit } from '../HOCs/withSummit'
import { Layout } from '../components/Layout'
import { SUMMIT_PHOTO_UPLOAD, ADD_CLIMB } from '../constants/modalNames'
import { modalOpen } from '../redux/actions/modal'
import { ClimbsList } from '../components/ClimbsList'

export class SummitPageMarkup extends Component {
  static propTypes = {
    summit: summitShape,
    pending: PropTypes.bool,
    modalOpen: PropTypes.func
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchById(id)
  }

  handleAddPhotoClick = () => {
    this.props.modalOpen(SUMMIT_PHOTO_UPLOAD)
  }

  handleClimbClick = () => {
    this.props.modalOpen(ADD_CLIMB)
  }

  renderSummitCarouselItem(image) {
    return (
      <Carousel.Item key={image._id}>
        <img
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </Carousel.Item>
    )
  }

  render() {
    if (this.props.pending) {
      return null
    } else {
      return (
        <Layout>
          <div className="SummitPage">
            <PageHeader>{this.props.summit.name}</PageHeader>
            <Row>
              <Col sm={4}>
                {
                  !isEmpty(this.props.summit.images) && (
                    <div className="SummitPage__carouselContainer">
                      <Carousel>
                        {
                          this.props.summit.images.map(this.renderSummitCarouselItem, this)
                        }
                      </Carousel>
                    </div>
                  )
                }
                <Button onClick={this.handleAddPhotoClick}>Добавить фотографию</Button>
              </Col>
              <Col sm={8}>
                <dl>
                  <dt>Высота</dt>
                  <dd>{this.props.summit.height}м</dd>
                </dl>
                <dl>
                  <dt>Хребет</dt>
                  <dd>{this.props.summit.ridge}</dd>
                </dl>
                <dl>
                  <dt>Восходителей</dt>
                  <dd>{this.props.summit.climbs.length}</dd>
                </dl>
                <Button bsStyle="primary" onClick={this.handleClimbClick}>Взошли на эту вершину?</Button>
              </Col>
            </Row>
            <Row>
              <ClimbsList climbs={this.props.summit.climbs} />
            </Row>
          </div>
        </Layout>
      )
    }
  }
}

const actions = dispatch => bindActionCreators({
  modalOpen
}, dispatch)

export const SummitPage = compose(
  withSummit,
  connect(null, actions)
)(SummitPageMarkup)
