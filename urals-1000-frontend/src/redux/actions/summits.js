import {
  SUMMITS_LOADING,
  SUMMITS_COMPLETE,
  SUMMITS_ERROR,
  SUMMIT_LOADING,
  SUMMIT_COMPLETE,
  SUMMIT_ERROR,
  SUMMIT_ADD_IMAGE,
  SUMMIT_ADD_IMAGE_SUCCESS,
  SUMMIT_ADD_IMAGE_ERROR,
  SUMMIT_DELETE_IMAGE,
  SUMMIT_DELETE_IMAGE_SUCCESS,
  SUMMIT_DELETE_IMAGE_ERROR,
  SUMMIT_ADD_CLIMB,
  SUMMIT_ADD_CLIMB_SUCCESS,
  SUMMIT_ADD_CLIMB_ERROR
} from '../actionTypes'

export const fetchSummits = () => {
  return {
    types: [SUMMITS_LOADING, SUMMITS_COMPLETE, SUMMITS_ERROR],
    payload: {
      request: {
        url: '/summits'
      }
    }
  }
}

export const fetchById = id => {
  return {
    types: [SUMMIT_LOADING, SUMMIT_COMPLETE, SUMMIT_ERROR],
    payload: {
      request: {
        url: `/summits/${id}`
      }
    }
  }
}

export const addImage = (id, imageUrl) => {
  return {
    types: [SUMMIT_ADD_IMAGE, SUMMIT_ADD_IMAGE_SUCCESS, SUMMIT_ADD_IMAGE_ERROR],
    payload: {
      request: {
        url: `/summits/${id}/addImage`,
        method: 'POST',
        data: {
          imageUrl
        }
      }
    }
  }
}

export const deleteImage = (id, imageUrl) => {
  return {
    types: [SUMMIT_DELETE_IMAGE, SUMMIT_DELETE_IMAGE_SUCCESS, SUMMIT_DELETE_IMAGE_ERROR],
    payload: {
      request: {
        url: `/summits/${id}/deleteImage`,
        method: 'DELETE',
        data: {
          imageUrl
        }
      }
    }
  }
}

export const addClimb = (id, data) => {
  return {
    types: [SUMMIT_ADD_CLIMB, SUMMIT_ADD_CLIMB_SUCCESS, SUMMIT_ADD_CLIMB_ERROR],
    payload: {
      request: {
        url: `/summits/${id}/addClimb`,
        method: 'POST',
        data
      }
    }
  }
}
