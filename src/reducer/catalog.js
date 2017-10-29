import {catalogs} from '../fixtures'
import {TOGGLE_CATALOG} from '../constants'

export default (currentCatalog = catalogs[0], action) => {
  const {type, payload} = action
  console.log(action)
  switch (type) {
    case TOGGLE_CATALOG:
      catalogs.some((catalog) => {
        if (catalog.id === payload.id) {
          currentCatalog = catalog
          return true
        }
      })
      return currentCatalog
  }

  return currentCatalog
}
