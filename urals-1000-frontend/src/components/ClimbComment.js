import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import { climbShape } from '../prop-types'
import { format } from 'date-fns'

export class ClimbComment extends Component {
  static propTypes = {
    climb: climbShape
  }

  render() {
    return (
      <div className="ClimbComment">
        <Media>
          {/* <Media.Left>
            <img
              src={this.props.climb.avatar.url}
              width={this.props.climb.avatar.width}
              height={this.props.climb.avatar.height}
              alt=""
            />
          </Media.Left> */}
          <Media.Body>
            <Media.Heading>{this.props.climb.name}</Media.Heading>
            <p>{format(this.props.climb.date, 'DD.MM.YYYY')}</p>
            <p>{this.props.climb.comment}</p>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
