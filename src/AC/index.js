import {
  INCREMENT,
  TOGGLE_CATALOG,
  TOGGLE_DIALOG
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function toggleCatalog(id) {
  return {
    type: TOGGLE_CATALOG,
    payload: {id}
  }
}

export function toggleDialog() {
  return {
    type: TOGGLE_DIALOG
  }
}
