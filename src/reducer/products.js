import {products as defaultProducts} from '../fixtures'
import {TOGGLE_CATALOG} from '../constants'

export default (products = defaultProducts, action) => {
  const {type} = action

  switch (type) {
    case TOGGLE_CATALOG: return products
  }

  return products
}
