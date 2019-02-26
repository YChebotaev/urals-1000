import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Image } from "react-bootstrap";
import { climbShape } from "../prop-types";
import { Link } from "react-router-dom";

export class ClimbsTable extends Component {
  static propTypes = {
    climbs: PropTypes.arrayOf(climbShape)
  };

  climbNameFormatter = (name, climb) => {
    if (climb.avatar) {
      const {
        avatar: { url }
      } = climb;
      return (
        <div className="ClimbsTable__climbName">
          <Image thumbnail src={url} width={60} height={60} alt="" />
          &nbsp;
          <Link to={`/climbers/${climb._id}`}>{name}</Link>
        </div>
      );
    } else {
      return <Link to={`/climbers/${climb._id}`}>{name}</Link>;
    }
  };

  climbingsFormatter = climbs => {
    return climbs.length;
  };

  ratingFormatter = rating => {
    return rating;
  };

  render() {
    return (
      <div className="ClimbsTable">
        <BootstrapTable data={this.props.climbs}>
          <TableHeaderColumn
            isKey
            dataField="name"
            dataFormat={this.climbNameFormatter}
          >
            Имя
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="climbs"
            dataFormat={this.climbingsFormatter}
          >
            Восхождений
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="rating"
            dataFormat={this.ratingFormatter}
          >
            Место в рейтинге
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
