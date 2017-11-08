import React, {Component} from 'react'

function Furniture() {
  return (
    <section className="contacts-block">
      <div className="contacts-block__title">Наши контакты</div>
      <div className="contacts-block__addresses-wrapper">
        <div className="contacts-block__addresses-title">Адреса магазинов:</div>
        <div className="contacts-block__addresses-list">
          <div className="contacts-block__address">
            <div className="contacts-block__address-text">г. Москва,</div>
            <div className="contacts-block__address-text">пр. Защитников Москвы,</div>
            <div className="contacts-block__address-text">д. 13</div>
          </div>
          <div className="contacts-block__address">
            <div className="contacts-block__address-text">г. Москва,</div>
            <div className="contacts-block__address-text">ул. Покровская,</div>
            <div className="contacts-block__address-text">д. 31</div>
          </div>
          <div className="contacts-block__address">
            <div className="contacts-block__address-text">г. Москва,</div>
            <div className="contacts-block__address-text">ул. Татьяны Макаровой,</div>
            <div className="contacts-block__address-text">д. 8</div>
          </div>
          <div className="contacts-block__address">
            <div className="contacts-block__address-text">г. Люберцы</div>
            <div className="contacts-block__address-text">пр. Комсомольский,</div>
            <div className="contacts-block__address-text">д. 16/2</div>
          </div>
          <div className="contacts-block__address">
            <div className="contacts-block__address-text">г. Люберцы</div>
            <div className="contacts-block__address-text">ул. 8 Марта,</div>
            <div className="contacts-block__address-text">д. 61 </div>
          </div>
          <div className="contacts-block__address">
            <div className="contacts-block__address-text">г. Люберцы</div>
            <div className="contacts-block__address-text">пр. Победы,</div>
            <div className="contacts-block__address-text">д. 11</div>
          </div>
        </div>
      </div>
      <div className="contacts-block__info">
        <div className="contacts-block__item contacts-block__item--schedule">
          <div className="contacts-block__item-title">Время работы:</div>
          <div className="contacts-block__item-text">Пн-пт с 10:00 до 20:00, сб-вс с 10:00 до 20:00</div>
        </div>
        <div className="contacts-block__item contacts-block__item--contacts">
          <a className="contacts-block__item-email" href="#">msk@shtamp777.ru</a>
          <div className="contacts-block__item-phone">+ 7 (925) 350-54-56</div>
          <div className="contacts-block__item-phone">+ 7 (499) 391-41-22</div>
          <div className="contacts-block__item-icons">
            <div className="contacts-block__icon contacts-block__icon--viber"></div>
            <div className="contacts-block__icon contacts-block__icon--whatsapp"></div>
          </div>
        </div>
        <div className="contacts-block__item contacts-block__item--social">
          <div className="contacts-block__item-title">Следите за нами:</div>
          <div className="contacts-block__item-icons contacts-block__item-icons--social">
            <div className="contacts-block__item-icon contacts-block__item-icon--facebook"></div>
            <div className="contacts-block__item-icon contacts-block__item-icon--vk"></div>
            <div className="contacts-block__item-icon contacts-block__item-icon--ok"></div>
            <div className="contacts-block__item-icon contacts-block__item-icon--inst"></div>
          </div>
        </div>
      </div>
      <div className="contacts-block__map"></div>
    </section>
  )
}

export default Furniture
