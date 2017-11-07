import React, {Component} from 'react'
import CatalogControls from './CatalogControls'
import ProductsList from './ProductsList'
import PropTypes from 'prop-types'

class Catalog extends Component {
  static propTypres = {
    catalog: PropTypes.object.isRequired,
    toggleTab: PropTypes.func.isRequired,
    openTabNumber: PropTypes.number.isRequired
  }

  render() {
    const {catalogs, toggleTab, openTabNumber} = this.props

    return (
      <div className="catalog x-catalog">
        <div className="catalog__title">Выберите подходящую оснастку</div>
        <div className="catalog__controls-block">
          <CatalogControls />
        </div>
        <div className="catalog__catalogs-block">
          <ProductsList />
        </div>
        <div className="catalog__low-price container">
          <div className="catalog__low-price-title">Нашли дешевле?</div>
          <div className="catalog__low-price-text">
            Мы сделаем цену ниже еще
            <span className="catalog__low-price-text-bold"> на 5%</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Catalog
