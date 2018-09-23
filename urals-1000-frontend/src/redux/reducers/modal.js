import {
  MODAL_OPEN,
  MODAL_CLOSE
} from '../actionTypes'

export const modal = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        [meta.name]: {
          open: true,
          props: payload
        }
      }
    case MODAL_CLOSE:
      return {
        ...state,
        [meta.name]: {
          open: false,
          props: {}
        }
      }
    default:
      return state
  }
}
