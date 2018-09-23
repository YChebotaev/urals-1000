import {
  SUMMIT_LOADING,
  SUMMIT_COMPLETE,
  SUMMIT_ERROR,
  SUMMIT_ADD_IMAGE_SUCCESS,
  SUMMIT_DELETE_IMAGE_SUCCESS
} from '../actionTypes'

const initialState = {
  item: {},
  pending: true,
  error: false
}

export const summit = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SUMMIT_LOADING:
      return {
        ...state,
        ...initialState
      }
    case SUMMIT_COMPLETE:
      return {
        ...state,
        item: payload.data,
        pending: false
      }
    case SUMMIT_ERROR:
      return {
        ...state,
        error,
        pending: false
      }
    case SUMMIT_ADD_IMAGE_SUCCESS:
      return {
        ...state,
        item: payload.data
      }
    case SUMMIT_DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        item: payload.data
      }
    default:
      return state
  }
}
