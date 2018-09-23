import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'
import { TopBar } from './TopBar'

export class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
    withMap: PropTypes.bool
  }

  render() {
    if (this.props.withMap) {
      return (
        <div className="Layout Layout--withMap">
          <TopBar />
          {
            this.props.children
          }
        </div>
      )
    } else {
      return (
        <div className="Layout">
          <TopBar withMargin />
          <Grid>
            {
              this.props.children
            }
          </Grid>
        </div>
      )
    }
  }
}
