import React, {Component} from 'react'

function Feedback() {
  return (
    <section className="feedback">
      <div className="feedback__wrapper container">
        <div className="feedback__text">
          <div className="feedback__text-title">Остались вопросы?</div>
          <div className="feedback__text-title feedback__text-title--light">Задайте их нам!</div>
          <div className="feedback__text-item">Мы ответим на все ваши вопросы, касающиеся  моделей и продукции, а также текущих акций и скидок, способов доставки и оплаты</div>
        </div>
        <div className="feedback__form-wrapper">
          <form className="feedback__form">
            <div className="feedback__form-title">Оставьте заявку</div>
            <div className="feedback__form-item">на <span className="feedback__form-item--bold">бесплатную</span> консультацию нашего специалиста</div>
            <input className="feedback__form-input" type="text" id="name" placeholder="Ваше имя" />
            <input className="feedback__form-input" type="tel" id="call-number" placeholder="+7 (___) ___-__-__" />
            <input className="feedback__form-input feedback__form-input--comment" type="text" id="comment" placeholder="" />
            <input type="submit" className="feedback__form-button" value="Оставить заявку" />
          </form>
          <div className="feedback__form-sign">Воспользуйтесь формой обратной связи и мы ответим вам в течение нескольких рабочих часов</div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
