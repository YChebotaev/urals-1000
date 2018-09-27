import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchClimbs } from '../redux/actions/climbs'

const stateMapper = createStructuredSelector({
  climbs: state => state.climbs.items,
  pending: state => state.climbs.pending
})

const actions = dispatch => bindActionCreators(
  {
    fetchClimbs
  },
  dispatch
)

export const withClimbs = connect(stateMapper, actions)
