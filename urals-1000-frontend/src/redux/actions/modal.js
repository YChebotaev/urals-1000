import { MODAL_OPEN, MODAL_CLOSE } from "../actionTypes";

export const modalOpen = (modalName, modalProps = {}) => {
  return {
    type: MODAL_OPEN,
    payload: modalProps,
    meta: {
      name: modalName
    }
  }
}

export const modalClose = modalName => {
  return {
    type: MODAL_CLOSE,
    payload: {},
    meta: {
      name: modalName
    }
  }
}
