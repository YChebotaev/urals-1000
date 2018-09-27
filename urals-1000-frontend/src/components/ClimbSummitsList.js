import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { isEmpty } from 'lodash'
import { ClimbSummit } from './ClimbSummit'

export class ClimbSummitsList extends Component {
  static propTypes = {
    climbs: PropTypes.arrayOf(PropTypes.object) // TODO: More specific type
  }

  renderSummits() {
    if (!isEmpty(this.props.climbs)) {
      return this.props.climbs.map(this.renderSummit, this)
    } else {
      return 'Пока что не покорил ни одной вершины'
    }
  }

  renderSummit({ summit }) {
    return (
      <ClimbSummit summit={summit} key={summit._id} />
    )
  }

  render() {
    return (
      <div className="ClimbSummitsList">
        <h2>Список посещенных вершин</h2>
        {
          this.renderSummits()
        }
      </div>
    )
  }
}
