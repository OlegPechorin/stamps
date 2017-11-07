import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux'

function ProductsList({currentCatalog, products}) {
  products = products.filter((product) => {
    return currentCatalog.products.some((productId) => {
      return product.id === productId
    })
  })

  const productElements = products.map((product) => {
    return (
      <li key={product.id} className="products-list__item">
        <Product product={product} />
      </li>
    )
  })

  return (
    <ReactCSSTransitionGroup
      transitionName="products-list"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={100}
    >
      <ul key={currentCatalog.id} className="products-list container">
        {productElements}
      </ul>
    </ReactCSSTransitionGroup>
  )
}

ProductsList.propTypres = {
  currentCatalog: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
}

export default connect(({currentCatalog, products}) => ({
  currentCatalog, products
}))(ProductsList)
