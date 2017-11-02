import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function FirstScreen({firstScreenData}) {
  return (
    <section className="first-screen">
      <div className="first-screen__wrapper container">
        <div className="first-screen__title-block">
          <div className="first-screen__title-wrapper">
            <div className="first-screen__title first-screen__title--stamps">{firstScreenData.titleBold}</div>
            <div className="first-screen__title first-screen__title--time">{firstScreenData.title}</div>
          </div>
          <div className="first-screen__stock">
            <div className="first-screen__stock-icon-wrapper">
              <img className="first-screen__stock-icon" src="./img/stock-icon.png" />
            </div>
            <div className="first-screen__stock-text-wrapper">
              <div className="first-screen__stock-label">{firstScreenData.stockLabel}</div>
              <div className="first-screen__stock-title">{firstScreenData.stockText}</div>
              <div className="first-screen__stock-title first-screen__stock-title--free">{firstScreenData.stockTextBold}</div>
            </div>
          </div>
        </div>
        <div className="first-screen__form-block">
          <form className="first-screen__form">
            <div className="first-screen__form-title">{firstScreenData.formTitle}</div>
            <div className="first-screen__form-item">
              <div className="first-screen__form-item--one">{firstScreenData.formTextOne}</div>
              <div className="first-screen__form-item--two">{firstScreenData.formTextTwo}</div>
            </div>
            <input className="first-screen__form-input" type="text" id="name" placeholder="Ваше имя" />
            <input className="first-screen__form-input" type="tel" id="call-number" placeholder="+7 (___) ___-__-__" />
            <input type="submit" className="first-screen__form-button" value={firstScreenData.formButtonText} />
          </form>
        </div>
      </div>
    </section>
  )
}

FirstScreen.propTypres = {
  firstScreenData: PropTypes.shape({
    titleBold: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stockLabel: PropTypes.string.isRequired,
    stockText: PropTypes.string.isRequired,
    stockTextBold: PropTypes.string.isRequired,
    formTitle: PropTypes.string.isRequired,
    formTextOne: PropTypes.string.isRequired,
    formTextTwo: PropTypes.string.isRequired,
    formButtonText: PropTypes.string.isRequired
  }).isRequired
}

export default connect(({firstScreenData}) => ({firstScreenData}))(FirstScreen)
