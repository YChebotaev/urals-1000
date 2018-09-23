import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchSummits } from '../redux/actions/summits'

const stateMapper = createStructuredSelector({
  summits: state => state.summits.items,
  pending: state => state.summits.pending
})

const actions = dispatch => bindActionCreators(
  {
    fetchSummits
  },
  dispatch
)

export const withSummits = connect(stateMapper, actions)
