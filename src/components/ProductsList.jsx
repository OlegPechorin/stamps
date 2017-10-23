import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './ProductsList.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function ProductsList({products, openTabNumber}) {
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
      <ul key={openTabNumber} className="products-list">
        {productElements}
      </ul>
    </ReactCSSTransitionGroup>
  )
}

ProductsList.propTypres = {
  products: PropTypes.array.isRequired
}

export default ProductsList
