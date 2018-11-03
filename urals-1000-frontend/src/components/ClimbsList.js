import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { climbShape } from '../prop-types'
import { ClimbComment } from './ClimbComment'

export class ClimbsList extends Component {
  static propTypes = {
    climbs: PropTypes.arrayOf(climbShape)
  }

  renderClimbs() {
    if (this.props.climbs.length) {
      return this.props.climbs.map(this.renderClimb, this)
    } else {
      return 'Пока что вершину никто не покорил.'
    }
  }

  renderClimb(climb) {
    return (
      <ClimbComment climb={climb} key={climb.comment} />
    )
  }

  render() {
    return (
      <div className="ClimbsList">
        <h2>Восходители</h2>
        {
          this.renderClimbs()
        }
      </div>
    )
  }
}
