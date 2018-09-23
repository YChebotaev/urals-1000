import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { isEmpty } from 'lodash'
import { summitShape } from '../prop-types'
import { ClimberSummit } from './ClimberSummit'

export class ClimberSummitsList extends Component {
  static propTypes = {
    summits: PropTypes.arrayOf(summitShape)
  }

  renderSummits() {
    if (!isEmpty(this.props.summits)) {
      return this.props.summits.map(this.renderSummit, this)
    } else {
      return 'Пока что не покорил ни одной вершины'
    }
  }

  renderSummit(summit) {
    return (
      <ClimberSummit summit={summit} key={summit._id} />
    )
  }

  render() {
    return (
      <div className="ClimberSummitsList">
        <h2>Список посещенных вершин</h2>
        {
          this.renderSummits()
        }
      </div>
    )
  }
}
