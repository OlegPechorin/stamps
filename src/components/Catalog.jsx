import React, {Component} from 'react'
import CatalogControls from './CatalogControls'
import ProductsList from './ProductsList'
import PropTypes from 'prop-types'
import './Catalog.scss'

class Catalog extends Component {
  static propTypres = {
    catalog: PropTypes.object.isRequired,
    toggleTab: PropTypes.func.isRequired,
    openTabNumber: PropTypes.number.isRequired
  }

  render() {
    const {catalogs, toggleTab, openTabNumber} = this.props

    return (
      <div className="catalog">
        <div className="catalog__controls-block">
          <CatalogControls />
        </div>
        <div className="catalog__catalog-block">
          <ProductsList />
        </div>
      </div>
    )
  }
}

export default Catalog
