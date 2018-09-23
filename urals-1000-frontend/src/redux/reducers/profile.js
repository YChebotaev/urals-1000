import {
  PROFILE_LOADING,
  PROFILE_SAVING,
  PROFILE_UPDATE_IMAGE
} from '../actionTypes'

const initialState = {
  item: {},
  pending: true,
  error: false
}

export const profile = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        ...initialState
      }
    case `${PROFILE_LOADING}_SUCCESS`:
      return {
        ...state,
        item: payload.data,
        pending: false
      }
    case `${PROFILE_LOADING}_ERROR`:
      return {
        ...state,
        error,
        pending: false
      }
    case `${PROFILE_SAVING}_SUCCESS`:
      return {
        ...state,
        item: payload.data,
        pending: false
      }
    case `${PROFILE_UPDATE_IMAGE}_SUCCESS`:
      return {
        ...state,
        item: payload.data,
        pending: false
      }
    default:
      return state
  }
}
