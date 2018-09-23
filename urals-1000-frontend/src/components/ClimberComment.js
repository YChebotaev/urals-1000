import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import { climberShape } from '../prop-types'
import { format } from 'date-fns'

export class ClimberComment extends Component {
  static propTypes = {
    climber: climberShape
  }

  render() {
    return (
      <div className="ClimberComment">
        <Media>
          <Media.Left>
            <img
              src={this.props.climber.avatar.url}
              width={this.props.climber.avatar.width}
              height={this.props.climber.avatar.height}
              alt=""
            />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.climber.name}</Media.Heading>
            <p>{format(this.props.climber.date, 'DD.MM.YYYY')}</p>
            <p>{this.props.climber.comment}</p>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
