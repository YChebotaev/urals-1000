import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { climberShape } from '../prop-types'
import { ClimberComment } from './ClimberComment'

export class ClimbersList extends Component {
  static propTypes = {
    climbers: PropTypes.arrayOf(climberShape)
  }

  renderClimbers() {
    if (this.props.climbers.length) {
      return this.props.climbers.map(this.renderClimber, this)
    } else {
      return 'Пока что вершину никто не покорил.'
    }
  }

  renderClimber(climber) {
    return (
      <ClimberComment climber={climber} key={climber.comment} />
    )
  }

  render() {
    return (
      <div className="ClimbersList">
        <h2>Восходители</h2>
        {
          this.renderClimbers()
        }
      </div>
    )
  }
}
