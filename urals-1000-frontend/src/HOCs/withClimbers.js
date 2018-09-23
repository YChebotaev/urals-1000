import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchClimbers } from '../redux/actions/climbers'

const stateMapper = createStructuredSelector({
  climbers: state => state.climbers.items,
  pending: state => state.climbers.pending
})

const actions = dispatch => bindActionCreators(
  {
    fetchClimbers
  },
  dispatch
)

export const withClimbers = connect(stateMapper, actions)
