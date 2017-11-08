import React, {Component} from 'react'

function DeliverySection() {
  return (
    <section className="delivery">
      <div className="delivery__title">Условия доставки и оплаты</div>
      <div className="delivery__order">
        <div className="delivery__order-wrapper">
          <div className="delivery__order-steps order-steps">
            <div className="order-steps__block">
              <div className="order-steps__number">1</div>
              <div className="order-steps__name">Оформление заявки</div>
            </div>
            <div className="order-steps__block">
              <div className="order-steps__number">2</div>
              <div className="order-steps__name">Звонок менеджера</div>
            </div>
            <div className="order-steps__block">
              <div className="order-steps__number">3</div>
              <div className="order-steps__name">Изготовление печати</div>
            </div>
            <div className="order-steps__block">
              <div className="order-steps__number">4</div>
              <div className="order-steps__name">Доставки и оплата</div>
            </div>
          </div>
          <div className="delivery__order-about order-about">
            <div className="order-about__text">
              <div className="order-about__title">Кто может получить заказ</div>
              <div className="order-about__item">Получателем заказа для физического лица является сам предприниматель, для юридических лиц - руководитель предприятия или иные лица по доверенности.</div>
              <div className="order-about__title">Как оплатить заказ</div>
              <div className="order-about__item">Вы можете оплатить заказ <span className="order-about__item--decoration">сразу на сайте</span> или курьеру при получении, наличными или банковской картой</div>
            </div>
            <img className="order-about__photo" src="./img/box.png" alt="order-photo" />
          </div>
        </div>
      </div>
      <div className="delivery__types">
        <div className="delivery__types-wrapper">
          <div className="delivery__type delivery__type--common">
            <div className="delivery__type-icon delivery__type-icon--common"></div>
            <div className="delivery__type-title">Обычная доставка</div>
            <div className="delivery__type-text">Если Вы не торопитесь, то мы можем доставить Вам печать в день заказа или на следующий день.</div>
            <div className="delivery__type-item">При заказе <span className="delivery__type-item--bold">от 200 рублей</span></div>
          </div>
          <div className="delivery__type">
            <div className="delivery__type-icon delivery__type-icon--free"></div>
            <div className="delivery__type-title">Бесплатная доставка</div>
            <div className="delivery__type-text">Вы можете воспользоваться бесплатной доставкой на следующий день, если сумма Вашего заказа более 2000 рублей.</div>
            <div className="delivery__type-item">При заказе <span className="delivery__type-item--bold">от 2000 рублей</span></div>
          </div>
          <div className="delivery__type delivery__type--lightning">
            <div className="delivery__type-title delivery__type-title--lightning">Доставка–молния</div>
            <div className="delivery__type-text delivery__type-text--lightning">Печать необходима Вам немедленно? Наши курьеры доставят Вам её в течении 2 часов от Вашего звонка!</div>
            <div className="delivery__type-item delivery__type-item--lightning">При заказе <span className="delivery__type-item--bold">от 550 рублей</span></div>
          </div>
        </div>
      </div>
      <div className="delivery__footer">
        <div className="delivery__footer-wrapper container">
          <div className="delivery__footer-icon"></div>
          <div className="delivery__footer-text">Вы можете сделать заказ и наша собственная курьерская служба привезет печать или штамп в любой удобный для Вас район города в тот же день!</div>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection
