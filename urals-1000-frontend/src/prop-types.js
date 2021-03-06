import { PropTypes } from 'prop-types'

export const climbShape = PropTypes.shape({
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
  climbs: PropTypes.arrayOf(climbShape)
})

export const profileShape = PropTypes.object // TODO
