import {TOGGLE_DIALOG} from '../constants'

export default (isOpen = false, action) => {
  const {type} = action

  switch (type) {
    case TOGGLE_DIALOG: return !isOpen
  }

  return isOpen
}
