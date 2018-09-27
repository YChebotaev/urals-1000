import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { summitShape } from '../prop-types'

export class ClimbSummit extends Component {
  static propTypes = {
    summit: summitShape
  }

  render() {
    return (
      <div className="ClimbSummit">
        <Media>
          <Media.Body>
            <Media.Heading>
              <Link to={`/summits/${this.props.summit.name}-${this.props.summit._id}`}>{this.props.summit.name}</Link>
            </Media.Heading>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
