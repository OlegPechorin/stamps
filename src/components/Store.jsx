import React, {Component} from 'react'
import CatalogControls from './CatalogControls'
import ProductsList from './ProductsList'
import './Store.scss'
import {catalogs} from '../fixtures'

class Store extends Component {
  state = {
    openCatalogId: 0
  }

  render() {

    return (
      <div className="store">
        <div className="store__controls-block">
          <CatalogControls
            toggleOpen={this.toggleOpenCatalog}
            openCatalogId={this.state.openCatalogId}
          />
        </div>
        <div className="store__catalog-block">
          <ProductsList products={catalogs[this.state.openCatalogId].products} />
        </div>
      </div>
    )
  }

  toggleOpenCatalog = (openCatalogId) => {
    this.setState({openCatalogId})
  }
}

export default Store
