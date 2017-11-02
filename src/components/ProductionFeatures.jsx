import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function ProductionFeatures() {
  return (
    <div className="production-features">
      <div className="production-features__title">Отличаемся от конкурентов</div>
      <div className="production-features__list">
        <div className="production-features__item">
          <div className="production-features__icon production-features__icon--delivery"></div>
          <div className="production-features__name">Самая быстрая<br />курьерская служба</div>
          <div className="production-features__text">От оформления заказа<br />до печати в ваших руках<br />пройдёт всего 1 час</div>
        </div>
        <div className="production-features__item">
          <div className="production-features__icon production-features__icon--layouts"></div>
          <div className="production-features__name">макеты на<br />выбор</div>
          <div className="production-features__text">У вас будет широкий<br />выбор макетов —<br />без доплат</div>
        </div>
        <div className="production-features__item">
          <div className="production-features__icon production-features__icon--consultation"></div>
          <div className="production-features__name">Бесплатное юридическое<br /> консультирование</div>
          <div className="production-features__text">Не знаете какая именно <br />печать Вам нужна? <br />Звоните - поможем!</div>
        </div>
      </div>
    </div>
  )
}

ProductionFeatures.propTypres = {

}

export default ProductionFeatures
