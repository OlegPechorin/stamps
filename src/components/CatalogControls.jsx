import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {catalogs} from '../fixtures'

import './CatalogControls.scss'

class CatalogControls extends Component {
  static propTypres = {
    toggleOpen: PropTypes.func.isRequired,
    openCatalogId: PropTypes.number.isRequired
  }

  render() {
    const buttonClass = 'catalog-controls__button'
    const buttonActiveClass = buttonClass + ' catalog-controls__button--active'
    const {isOpen, toggleOpen, openCatalogId} = this.props

    const catalogControls = catalogs.map((catalog, i) => {
      return (
        <li key={catalog.id} className="catalog-controls__item">
          <button
            className={openCatalogId === i ? buttonActiveClass : buttonClass}
            onClick={toggleOpen.bind(this, i)}
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
}

export default CatalogControls
