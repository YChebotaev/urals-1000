import {
  CLIMBERS_LOADING,
  CLIMBERS_COMPLETE,
  CLIMBERS_ERROR
} from '../actionTypes'

export const fetchClimbers = () => {
  return {
    types: [CLIMBERS_LOADING, CLIMBERS_COMPLETE, CLIMBERS_ERROR],
    payload: {
      request: {
        url: '/climbers'
      }
    }
  }
}
