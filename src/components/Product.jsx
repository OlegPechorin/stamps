import React, {Component} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import './Product.scss'

class Product extends Component {
  static propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired,
    toggleOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
  }

  render() {
    const {product, isOpen, toggleOpen} = this.props

    return (
      <article className="product" ref={this.setContainerRef}>
        <div className="product__img-wrapper">
          <img alt={product.title} className="product__img"/>
        </div>
        <div className="product__title">{product.title}</div>
        <div className="product__more" onClick = {toggleOpen}>
          {isOpen ? 'Скрыть информацию' : 'Показать информацию'}
        </div>
        {this.getDescription()}
        <div className="product__price">{product.price}</div>
        <button className="product__button">Заказать</button>
      </article>
    )
  }

  // setContainerRef = ref => {
  //   this.container = ref
  //   console.log(ref)
  // }

  getDescription() {
    const {product, isOpen} = this.props
    if (!isOpen) return null
    return <div className="product__description">{product.description}</div>
  }
}

export default toggleOpen(Product)
