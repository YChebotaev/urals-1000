import {
  CLIMBS_LOADING,
  CLIMBS_COMPLETE,
  CLIMBS_ERROR
} from '../actionTypes'

export const fetchClimbs = () => {
  return {
    types: [CLIMBS_LOADING, CLIMBS_COMPLETE, CLIMBS_ERROR],
    payload: {
      request: {
        url: '/climbs'
      }
    }
  }
}
