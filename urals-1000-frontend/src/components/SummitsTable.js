import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table'
import { summitShape } from '../prop-types'

export class SummitsTable extends Component {
  static propTypes = {
    summits: PropTypes.arrayOf(summitShape)
  }

  summitNameFormatter = (name, summit) => {
    return <Link to={`/summits/${name}-${summit._id}`}>{name}</Link>
  }

  summitRidgeFormatter = (ridge, summit) => {
    const lat = summit.coords[0]
    const lon = summit.coords[1]
    return <Link to={`/#/${lat}/${lon}`}>{ridge}</Link>
  }

  summitClimbersFormatters = (climbers) => {
    return climbers.length
  }

  render() {
    return (
      <div className="SummitsTable">
        <BootstrapTable data={this.props.summits}>
          <TableHeaderColumn isKey dataField="name" dataFormat={this.summitNameFormatter}>Название</TableHeaderColumn>
          <TableHeaderColumn dataField="height">Высота</TableHeaderColumn>
          <TableHeaderColumn dataField="ridge" dataFormat={this.summitRidgeFormatter}>Хребет</TableHeaderColumn>
          <TableHeaderColumn dataField="climbers" dataFormat={this.summitClimbersFormatters}>Восходителей</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
