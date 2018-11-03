import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Image } from 'react-bootstrap'
import { climbShape } from '../prop-types'

export class ClimbsTable extends Component {
  static propTypes = {
    climbs: PropTypes.arrayOf(climbShape)
  }

  climbNameFormatter = (name, climb) => {
    if (climb.avatar) {
      const { avatar: { url } } = climb
      return (
        <div className="ClimbsTable__climbName">
          <Image thumbnail src={url} width={60} height={60} alt="" />
          &nbsp;
          <span>{name}</span>
        </div>
      )
    } else {
      return (
        <span>{name}</span>
      )
    }
  }

  climbingsFormatter = (climbs, climb) => {
    return climbs.length
  }

  render() {
    return (
      <div className="ClimbsTable">
        <BootstrapTable data={this.props.climbs}>
          <TableHeaderColumn isKey dataField="name" dataFormat={this.climbNameFormatter}>Название</TableHeaderColumn>
          <TableHeaderColumn dataField="climbs" dataFormat={this.climbingsFormatter}>Восхождений</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}