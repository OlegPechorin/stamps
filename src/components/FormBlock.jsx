import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IMG_PATH} from '../constants'
import InputMask from 'react-input-mask'

function FormBlock({FormBlockData, imgName}) {
  return (
    <section className="form-block">
      <div className="container form-block__wrapper">
        <div className="form-block__head">
          <div className="form-block__title">
            <div className="form-block__title-text">Восстановление печати по оттиску</div>
            <div className="form-block__title-text form-block__title-text--about">Оставьте заявку и наши профессиональные дизайнеры воспроизведут копию любой печати с точностью 99,9 %</div>
          </div>
          <img
            className={'form-block__title-photo-' + imgName.slice(-5, -4)}
            src={IMG_PATH + imgName}
            alt="form-block photo"
          />
        </div>
        <form className="form-block__form">
          <input className="form-block__form-input" type="text" id="name" placeholder="Ваше имя" />
          <InputMask className="form-block__form-input" mask="+7 (999) 999-99-99" maskChar="_" placeholder="+7 (___) ___-__-__" />
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
