import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchProfileById,
  updateProfile,
  updateProfileImage
} from '../redux/actions/profile'

const stateMapper = createStructuredSelector({
  profile: state => state.profile.item,
})

const actions = dispatch => bindActionCreators(
  {
    fetchProfileById,
    updateProfile,
    updateProfileImage
  },
  dispatch
)

export const withProfile = connect(stateMapper, actions)
