import React, {Component} from 'react'

function Furniture() {
  return (
    <div className="faq__block faq__block--furniture">
      <div className="faq__title">Какую оснастку выбрать?</div>
      <div className="faq__about info-block info-block--mobile-m20">
        <div className="info-block__about info-block__about--furniture">
          <div className="info-block__about-text info-block__about-text--part">Сейчас ведущими мировыми производителями, такими как </div>
          <div className="info-block__about-item">— Trodat</div>
          <div className="info-block__about-item">— Colop </div>
          <div className="info-block__about-item info-block__about-item--shiny">— GRM, Shiny</div>
          <div className="info-block__about-text">выпускаются самые разные типы автоматических и полуавтоматических оснасток для печатей и штампов. Подбирать оснастку следует в зависимости от интенсивности использования:</div>
        </div>
        <img className="info-block__photo info-block__photo--furniture" src="./img/furniture.png" alt="furniture" />
      </div>
      <div className="faq__furniture-variation">
        <div className="faq__variation-item">
          <div className="faq__variation-title">Полуавтоматические<br /> и ручные печати </div>
          <div className="faq__variation-text">удобны для ежедневного использования <br/>при количестве оттисков <span className="faq__variation-text-bold">до 20 в день</span></div>
        </div>
        <div className="faq__variation-item">
          <div className="faq__variation-title">Автоматические печати</div>
          <div className="faq__variation-text"> выручат, если печатью вы <br />пользуетесь часто – <br/><span className="faq__variation-text-bold">более 20 оттисков в день</span></div>
        </div>
        <div className="faq__variation-item">
          <div className="faq__variation-title">Если печать всегда <br />должна быть с собой</div>
          <div className="faq__variation-text">выбирайте ручную <br />или карманную оснастку.</div>
        </div>
      </div>
    </div>
  )
}

export default Furniture
