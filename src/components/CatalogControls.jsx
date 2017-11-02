import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {toggleCatalog} from '../AC'

class CatalogControls extends Component {
  static propTypres = {
    catalogs: PropTypes.array.isRequired,
    currentCatalog: PropTypes.object.isRequired,
    toggleCatalog: PropTypes.func.isRequired
  }
  render() {
    const {catalogs, currentCatalog} = this.props
    const buttonClass = 'catalog-controls__button'
    const buttonActiveClass = buttonClass + ' catalog-controls__button--active'

    const catalogControls = catalogs.map((catalog, i) => {
      return (
        <li key={catalog.id} className="catalog-controls__item">
          <button
            className={currentCatalog.id === catalog.id ? buttonActiveClass : buttonClass}
            onClick={this.handleCatalog.bind(this, catalog.id)}
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

  handleCatalog = (id) => {
    const {toggleCatalog} = this.props
    toggleCatalog(id)
  }
}

export default connect(({catalogs, currentCatalog}) => ({
  catalogs, currentCatalog
}), {toggleCatalog})(CatalogControls)
