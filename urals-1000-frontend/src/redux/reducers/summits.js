import {
  SUMMITS_LOADING,
  SUMMITS_COMPLETE,
  SUMMITS_ERROR,
} from '../actionTypes'

const initialState = {
  items: [],
  pending: true,
  error: false
}

export const summits = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SUMMITS_LOADING:
      return {
        ...state,
        items: [],
        pending: true
      }
    case SUMMITS_COMPLETE:
      return {
        ...state,
        items: payload.data,
        pending: false
      }
    case SUMMITS_ERROR:
      return {
        ...state,
        error,
        pending: false
      }
    default:
      return state
  }
}
