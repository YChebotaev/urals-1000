import React, { Component } from 'react'
import { Layout } from '../components/Layout'
import { PageHeader } from 'react-bootstrap'

export class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="AboutPage">
          <PageHeader>О проекте</PageHeader>
          
        </div>
      </Layout>
    )
  }
}
