import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Image } from 'react-bootstrap'
import { climberShape } from '../prop-types'

export class ClimbersTable extends Component {
  static propTypes = {
    climbers: PropTypes.arrayOf(climberShape)
  }

  climberNameFormatter = (name, climber) => {
    if (climber.avatar) {
      const { avatar: { url } } = climber
      return (
        <div className="ClimbersTable__climberName">
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

  render() {
    return (
      <div className="ClimbersTable">
        <BootstrapTable data={this.props.climbers}>
          <TableHeaderColumn isKey dataField="name" dataFormat={this.climberNameFormatter}>Название</TableHeaderColumn>
          <TableHeaderColumn dataField="climbings">Восхождений</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}