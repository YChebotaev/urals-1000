import {
  CLIMBERS_LOADING,
  CLIMBERS_COMPLETE,
  CLIMBERS_ERROR,
} from '../actionTypes'

const initialState = {
  items: [],
  pending: true,
  error: false
}

export const climbers = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case CLIMBERS_LOADING:
      return {
        ...state,
        items: [],
        pending: true
      }
    case CLIMBERS_COMPLETE:
      return {
        ...state,
        items: payload.data,
        pending: false
      }
    case CLIMBERS_ERROR:
      return {
        ...state,
        error,
        pending: false
      }
    default:
      return state
  }
}
