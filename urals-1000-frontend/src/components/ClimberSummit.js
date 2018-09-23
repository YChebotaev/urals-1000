import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import { summitShape } from '../prop-types'
import { format } from 'date-fns'

export class ClimberSummit extends Component {
  static propTypes = {
    summit: summitShape
  }

  render() {
    return (
      <div className="ClimberSummit">
        <Media>
          <Media.Body>
            <Media.Heading>{this.props.summit.name}</Media.Heading>
            <p>{format(this.props.summit.date, 'DD.MM.YYYY')}</p>
            <p>{this.props.summit.comment}</p>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
