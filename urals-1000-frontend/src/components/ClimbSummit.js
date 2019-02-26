import React, { Component } from "react";
import PropTypes from "prop-types";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { summitShape } from "../prop-types";
import { format } from "date-fns";

export class ClimbSummit extends Component {
  static propTypes = {
    date: PropTypes.string,
    comment: PropTypes.string,
    summit: summitShape
  };

  render() {
    return (
      <div className="ClimbSummit">
        <Media>
          <Media.Body>
            <Media.Heading>
              <Link
                to={`/summits/${this.props.summit.name}-${
                  this.props.summit._id
                }`}
              >
                {this.props.summit.name}
              </Link>
              &nbsp;<small>Хребет {this.props.summit.ridge}</small>
            </Media.Heading>
            <p className="text-muted">
              <i>{format(this.props.date, "DD.MM.YYYY")}</i>
            </p>
            <p>{this.props.comment}</p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
