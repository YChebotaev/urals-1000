import { PropTypes } from 'prop-types'

export const climberShape = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.string,
  climbings: PropTypes.number,
  avatar: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    url: PropTypes.string
  })
})

export const summitShape = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  height: PropTypes.number,
  ridge: PropTypes.string,
  climbers: PropTypes.arrayOf(climberShape)
})

export const profileShape = PropTypes.object // TODO
