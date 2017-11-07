import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IMG_PATH} from '../constants'

function FormBlock({FormBlockData}) {
  return (
    <section className="form-block">
      <div className="container form-block__wrapper">
        <div className="form-block__head">
          <div className="form-block__title">
            <div className="form-block__title-text">Восстановление печати по оттиску</div>
            <div className="form-block__title-text form-block__title-text--about">Оставьте заявку и наши профессиональные дизайнеры воспроизведут копию любой печати с точностью 99,9 %</div>
          </div>
          <img className="form-block__title-photo" src="./img/form-block-photo.png" alt="form-block photo" />
        </div>
        <form className="form-block__form">
          <input className="form-block__form-input" type="text" id="name" placeholder="Ваше имя" />
          <input className="form-block__form-input" type="tel" id="call-number" placeholder="+7 (___) ___-__-__" />
          <input type="submit" className="form-block__form-button" value="Заказать восстановление" />
        </form>
      </div>
      <div className="form-block__stamp-bg"></div>
    </section>
  )
}

FormBlock.propTypres = {
  FormBlockData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    textBold: PropTypes.string.isRequired,
  }).isRequired
}

export default connect(({FormBlockData}) => ({FormBlockData}))(FormBlock)
