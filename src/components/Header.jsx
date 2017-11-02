import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Header({logo, headerLinks, callbackData}) {
  const linkElements = headerLinks.map((link) => {
    return (
      <li key={link.href} className="main-navigation__item">
        <a className="main-navigation__link" href={link.href}>{link.text}</a>
      </li>
    )
  })

  return (
    <header className="container main-header x-header">
      <div className="main-header__logo-wrapper">
        <img className="main-header__logo" src={logo.src} />
        <div className="main-header__logo-item">{logo.text}</div>
      </div>
      <nav className="main-header__navigation main-navigation">
        <ul className="main-navigation__link-list">
          {linkElements}
        </ul>
      </nav>
      <div className="main-header__contact-wrapper">
        <a className="main-header__contact" href={'tel:' + callbackData.phoneNumberSrc}>{callbackData.phoneNumber}</a>
        <div className="main-header__callback">{callbackData.text}</div>
      </div>
    </header>
  )
}

Header.propTypres = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  links: PropTypes.array.isRequired,
  callbackData: PropTypes.shape({
    phoneNumber: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default connect(({logo, headerLinks, callbackData}) => ({logo, headerLinks, callbackData}))(Header)
