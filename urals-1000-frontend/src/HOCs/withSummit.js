import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchById,
  addImage,
  deleteImage,
  addClimb
} from '../redux/actions/summits'

const stateMapper = createStructuredSelector({
  summit: state => state.summit.item,
  pending: state => state.summit.pending
})

const actions = dispatch => bindActionCreators(
  {
    fetchById,
    addImage,
    deleteImage,
    addClimb
  },
  dispatch
)

export const withSummit = connect(stateMapper, actions)
