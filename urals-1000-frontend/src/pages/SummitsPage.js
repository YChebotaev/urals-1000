import React, { Component } from 'react'
import { summitShape } from '../prop-types'
import { PropTypes } from 'prop-types';
import { PageHeader, Button } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import { SummitsTable } from '../components/SummitsTable'
import { withSummits } from '../HOCs/withSummits'

class SummitsPageMarkup extends Component {
  static propTypes = {
    summits: PropTypes.arrayOf(summitShape),
    fetchSummits: PropTypes.func
  }

  downloadGpx = e => {
    e.preventDefault()
    window.open(`${process.env.REACT_APP_API_BASE}/summits/summits.gpx`, '_blank')
  }

  componentDidMount() {
    this.props.fetchSummits()
  }

  render() {
    return (
      <Layout>
        <div className="SummitsPage">
          <PageHeader>Вершины Среднего Урала выше тысячи метров</PageHeader>
          <Button onClick={this.downloadGpx}>Скачать координаты в формате GPX</Button>
          <div className="SummitsPage__tableContainer">
            <SummitsTable summits={this.props.summits} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const SummitsPage = withSummits(SummitsPageMarkup)
