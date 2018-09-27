import {
  CLIMBS_LOADING,
  CLIMBS_COMPLETE,
  CLIMBS_ERROR,
} from '../actionTypes'

const initialState = {
  items: [],
  pending: true,
  error: false
}

export const climbs = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case CLIMBS_LOADING:
      return {
        ...state,
        items: [],
        pending: true
      }
    case CLIMBS_COMPLETE:
      return {
        ...state,
        items: payload.data,
        pending: false
      }
    case CLIMBS_ERROR:
      return {
        ...state,
        error,
        pending: false
      }
    default:
      return state
  }
}
