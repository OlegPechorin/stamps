import {combineReducers} from 'redux'
import counter from './counter'
import catalogs from './catalogs'
import currentCatalog from './catalog'
import products from './products'
import dialogIsOpen from './dialog'

export default combineReducers({
  counter,
  catalogs,
  currentCatalog,
  products,
  dialogIsOpen
})
