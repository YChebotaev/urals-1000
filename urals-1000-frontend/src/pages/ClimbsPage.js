import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { PageHeader } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import { climbShape } from '../prop-types'
import { ClimbsTable } from '../components/ClimbsTable'
import { withClimbs } from '../HOCs/withClimbs'

class ClimbsPageMarkup extends Component {
  static propTypes = {
    climbs: PropTypes.arrayOf(climbShape),
    fetchClimbs: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchClimbs()
  }

  render() {
    return (
      <Layout>
        <div className="ClimbsPage">
          <PageHeader>Рейтинг восходителей</PageHeader>
          <div className="ClimbsPager__tableContainer">
            <ClimbsTable climbs={this.props.climbs} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const ClimbsPage = withClimbs(ClimbsPageMarkup)
