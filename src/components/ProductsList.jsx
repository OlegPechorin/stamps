import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './ProductsList.scss'

function ProductsList({products}) {
  const productElements = products.map((product) => {
    return (
      <li key={product.id} className="products-list__item">
        <Product product={product} />
      </li>
    )
  })

  return (
    <ul className="products-list">
      {productElements}
    </ul>
  )
}

ProductsList.propTypres = {
  products: PropTypes.array.isRequired
}

export default ProductsList
