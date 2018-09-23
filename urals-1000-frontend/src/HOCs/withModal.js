import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modalOpen, modalClose } from '../redux/actions/modal';

export const withModal = modalName => {
  const stateMapper = createStructuredSelector({
    open: state => (state.modal[modalName] || { open: false }).open,
    props: state => (state.modal[modalName] || { props: {} }).props
  })
  
  const actions = dispatch => bindActionCreators(
    {
      modalOpen: props => modalOpen(modalName, props),
      modalClose: () => modalClose(modalName)
    },
    dispatch
  )

  return connect(stateMapper, actions)
}
