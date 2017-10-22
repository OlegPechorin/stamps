import React, {Component} from 'react'
import CatalogControls from './CatalogControls'
import ProductsList from './ProductsList'
import toggleTabs from '../decorators/toggleTabs'
import PropTypes from 'prop-types'
import './Store.scss'
import {catalogs} from '../fixtures'

function Store({toggleTab, openTabNumber}) {
  return (
    <div className="store">
      <div className="store__controls-block">
        <CatalogControls
          toggleTab={toggleTab}
          openTabNumber={openTabNumber}
        />
      </div>
      <div className="store__catalog-block">
        <ProductsList products={catalogs[openTabNumber].products} />
      </div>
    </div>
  )
}

Store.propTypres = {
  toggleTab: PropTypes.func.isRequired,
  openTabNumber: PropTypes.number.isRequired
}

export default toggleTabs(Store)
