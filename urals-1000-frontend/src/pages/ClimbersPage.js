import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { PageHeader } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import { climberShape } from '../prop-types'
import { ClimbersTable } from '../components/ClimbersTable'
import { withClimbers } from '../HOCs/withClimbers'

class ClimbersPageMarkup extends Component {
  static propTypes = {
    climbers: PropTypes.arrayOf(climberShape),
    fetchClimbers: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchClimbers()
  }

  render() {
    return (
      <Layout>
        <div className="ClimbersPage">
          <PageHeader>Рейтинг восходителей</PageHeader>
          <div className="ClimbersPager__tableContainer">
            <ClimbersTable climbers={this.props.climbers} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const ClimbersPage = withClimbers(ClimbersPageMarkup)
