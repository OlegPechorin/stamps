import React, {Component} from 'react'
import CatalogControls from './CatalogControls'
import ProductsList from './ProductsList'
import toggleTabs from '../decorators/toggleTabs'
import PropTypes from 'prop-types'
import './Store.scss'
import {catalogs} from '../fixtures'

class Store extends Component {
  static propTypres = {
    toggleTab: PropTypes.func.isRequired,
    openTabNumber: PropTypes.number.isRequired
  }

  render() {
    const {toggleTab, openTabNumber} = this.props

    return (
      <div className="store">
        <div className="store__controls-block">
          <CatalogControls
            toggleTab={toggleTab}
            openTabNumber={openTabNumber}
          />
        </div>
        <div className="store__catalog-block">
          <ProductsList
            products={catalogs[openTabNumber].products}
            openTabNumber={openTabNumber}
          />
        </div>
      </div>
    )
  }
}

export default toggleTabs(Store)
