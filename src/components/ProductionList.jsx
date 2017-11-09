import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IMG_PATH} from '../constants'
import {toggleCatalog} from '../AC'
import scrollToElement from 'scroll-to-element'

class ProductionList extends Component {
  static propTypres = {
    catalogs: PropTypes.array.isRequired,
    toggleCatalog: PropTypes.func.isRequired
  }

  render() {
    const {catalogs} = this.props
    const catalogControls = catalogs.map((catalog, i) => {
      return (
        <li
          key={catalog.id}
          className="production-list__item"
          onClick={this.handleCatalog.bind(this, catalog.id)}
        >
          <div className="production-list__item-img-wrapper">
            <img
              className="production-list__item-img production-list__item-img--automatic"
              src={IMG_PATH + catalog.imgName}
              alt={catalog.title}
            />
          </div>
          <div className="production-list__item-title">{catalog.title}</div>
        </li>
      )
    })

    return (
      <ul className="production-list">
        {catalogControls}
      </ul>
    )
  }

  handleCatalog = (id) => {
    const {toggleCatalog} = this.props
    toggleCatalog(id)
    if (window.innerWidth >= 768) {
      scrollToElement('.x-catalog')
    } else {
      scrollToElement('.x-products-list')
    }

  }
}

export default connect(({catalogs}) => ({
  catalogs
}), {toggleCatalog})(ProductionList)
