import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { summitShape } from '../prop-types'
import { compose } from 'recompose'
import withWindowSize from 'react-window-size'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import { Layout } from '../components/Layout'
import { withSummits } from '../HOCs/withSummits'
import { SummitOverlayContent } from '../components/SummitOverlayContent'

class MapPageMarkup extends Component {
  static propTypes = {
    windowWidth: PropTypes.number,
    windowHeight: PropTypes.number,
    summits: PropTypes.arrayOf(summitShape),
    fetchSummits: PropTypes.func
  }

  state = {
    overlay: {
      show: false,
      anchor: [0, 0]
    }
  }

  
  renderMarker(summit, index) {
    return (
      <Marker
      key={summit._id}
      anchor={summit.coords}
      payload={1}
      onClick={({ event, anchor }) => {
        this.showMarkerInfo(anchor, index)
      }}
      />
      )
    }
    
    showMarkerInfo(anchor, index) {
      const summit = this.props.summits[index]
      this.setState({
        overlay: {
          show: true,
          anchor,
          info: {
            summit
          }
        }
      })
    }
    
    renderOverlay() {
      const { anchor, info } = this.state.overlay
      return (
        <Overlay anchor={anchor}>
        <SummitOverlayContent summit={info.summit} />
      </Overlay>
    )
  }

  parseZoomFromHash() {
    // eslint-disable-next-line no-unused-vars
    let [ lattice, lat, lon, zoom ] = window.location.hash.split('/')
    zoom = parseInt(zoom, 10)
    return isNaN(zoom) ? 6 : zoom
  }

  parseCenterFromHash() {
    // eslint-disable-next-line no-unused-vars
    let [ lattice, lat, lon ] = window.location.hash.split('/')
    lat = parseFloat(lat)
    lon = parseFloat(lon)
    return (isNaN(lat) || isNaN(lon)) ? [54.613039, 59.080524] : [lat, lon]
  }

  componentDidMount() {
    this.props.fetchSummits()
  }

  handleMapBoundsChanged = ({ center, zoom, bounds, initial }) => {
    window.location.hash = `/${center[0]}/${center[1]}/${zoom}`
  }

  render() {
    return (
      <Layout withMap>
        <div className="MapPage">
        <Map
          center={this.parseCenterFromHash()}
          zoom={this.parseZoomFromHash()}
          width={this.props.windowWidth}
          height={this.props.windowHeight - 50}
          onBoundsChanged={this.handleMapBoundsChanged}
        >
          {
            this.props.summits.map(this.renderMarker, this)
          }
          {
            this.state.overlay.show && this.renderOverlay()
          }
        </Map>
        </div>
      </Layout>
    )
  }
}

export const MapPage = compose(
  withWindowSize,
  withSummits
)(MapPageMarkup)
