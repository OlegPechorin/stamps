import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './CatalogControls.scss'
import {catalogs} from '../fixtures'

function CatalogControls({toggleTab, openTabNumber}) {
  const buttonClass = 'catalog-controls__button'
  const buttonActiveClass = buttonClass + ' catalog-controls__button--active'

  const catalogControls = catalogs.map((catalog, i) => {
    return (
      <li key={catalog.id} className="catalog-controls__item">
        <button
          className={openTabNumber === i ? buttonActiveClass : buttonClass}
          onClick={toggleTab.bind(this, i)}
        >{catalog.title}</button>
      </li>
    )
  })

  return (
    <ul className="catalog-controls">
      {catalogControls}
    </ul>
  )
}

CatalogControls.propTypres = {
  toggleTab: PropTypes.func.isRequired,
  openTabNumber: PropTypes.number.isRequired
}

export default CatalogControls
