import {catalogs as defaultCatalogs} from '../fixtures'
import {TOGGLE_CATALOG} from '../constants'

export default (catalogs = defaultCatalogs, action) => {
  const {type, payload} = action

  return catalogs
}
