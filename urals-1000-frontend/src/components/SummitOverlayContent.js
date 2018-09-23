import React, { Component } from 'react'
import { summitShape } from '../prop-types';
import { Link } from 'react-router-dom'

export class SummitOverlayContent extends Component {
  static propTypes = {
    summit: summitShape
  }

  render() {
    return (
      <div className="SummitOverlayContent">
        <div className="SummitOverlayContent__section">
          <Link to={`/summits/${this.props.summit.name}-${this.props.summit._id}`}>{this.props.summit.name}</Link>
        </div>
        <div className="SummitOverlayContent__section">
          Высота: {this.props.summit.height}м
        </div>
        <div className="SummitOverlayContent__section">
          Хребет: {this.props.summit.ridge}
        </div>
      </div>
    )
  }
}
