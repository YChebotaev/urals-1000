import {
  PROFILE_LOADING,
  PROFILE_SAVING,
  PROFILE_UPDATE_IMAGE
} from '../actionTypes'

export const fetchProfileById = userId => {
  return {
    type: PROFILE_LOADING,
    payload: {
      request: {
        method: 'GET',
        url: `/profile/${userId}`
      }
    }
  }
}

export const updateProfile = (profileId, data) => {
  return {
    type: PROFILE_SAVING,
    payload: {
      request: {
        method: 'POST',
        url: `/profile/${profileId}`,
        data
      }
    }
  }
}

export const updateProfileImage = (profileId, imageUrl) => {
  return {
    type: PROFILE_UPDATE_IMAGE,
    payload: {
      request: {
        method: 'POST',
        url: `/profile/${profileId}/updateImage`,
        data: {
          imageUrl
        }
      }
    }
  }
}
