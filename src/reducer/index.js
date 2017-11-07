import {combineReducers} from 'redux'
import headerLinks from './headerLinks'
import logo from './logo'
import callbackData from './callbackData'
import firstScreenData from './firstScreenData'
import productionConceptData from './productionConceptData'
import qualityBlockData from './qualityBlockData'
import FAQBlocksData from './FAQBlocksData'
import counter from './counter'
import catalogs from './catalogs'
import currentCatalog from './catalog'
import products from './products'
import dialogIsOpen from './dialog'


export default combineReducers({
  headerLinks,
  logo,
  callbackData,
  firstScreenData,
  productionConceptData,
  qualityBlockData,
  FAQBlocksData,
  counter,
  catalogs,
  currentCatalog,
  products,
  dialogIsOpen
})
