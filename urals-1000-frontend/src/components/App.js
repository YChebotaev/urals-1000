import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import axios from 'axios'
import { MapPage } from '../pages/MapPage'
import { SummitsPage } from '../pages/SummitsPage'
import { SummitPage } from '../pages/SummitPage'
import { ClimbsPage } from '../pages/ClimbsPage'
import { AboutPage } from '../pages/AboutPage'
import { ProfilePage } from '../pages/ProfilePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { createStore } from '../redux/createStore'
import { SummitUploadPhoto } from '../modals/SummitUploadPhoto'
import { AddClimb } from '../modals/AddClimb'
import { ProfileUploadPhoto } from '../modals/ProfileUploadPhoto'
import Loading from 'react-fullscreen-loading'

export default class App extends Component {
  state = {
    pending: true
  }

  get store() {
    return createStore()
  }

  async componentDidMount() {
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE}/token`, {
      params: {
        userId: localStorage.getItem('userId')
      }
    })
    const { token, userId } = data
    localStorage.setItem('bearerToken', token)
    localStorage.setItem('userId', userId)
    this.setState({
      pending: false
    })
  }

  render() {
    if (this.state.pending) {
      return <Loading loading={this.state.pending} />
    } else {
      return (
        <Provider store={this.store}>
          <BrowserRouter>
            <Fragment>
              <Switch>
                <Route exact path="/" component={MapPage} />
                <Route exact path="/summits" component={SummitsPage} />
                <Route exact path="/summits/:name-:id" component={SummitPage} />
                <Route exact path="/climbs" component={ClimbsPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route component={NotFoundPage} />
              </Switch>
              <SummitUploadPhoto />
              <AddClimb />
              <ProfileUploadPhoto />
            </Fragment>
          </BrowserRouter>
        </Provider>
      )
    }
  }
}
