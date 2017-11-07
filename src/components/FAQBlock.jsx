import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {IMG_PATH} from '../constants'

function FAQBlock({FAQBlockItem, i}) {
  if (i % 2 == 0) {
    return (
      <div className="faq__technology info-block">
        <div className="info-block__about">
          <div className="info-block__about-title">{FAQBlockItem.title}</div>
          <div className="info-block__about-text">{FAQBlockItem.text}</div>
        </div>
        <div className="info-block__photo-wrapper">
          <img className="info-block__photo" src={IMG_PATH + FAQBlockItem.imgName} alt={FAQBlockItem.sign} />
          <div className="info-block__photo-sign">{FAQBlockItem.sign}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="faq__technology info-block">
        <div className="info-block__photo-wrapper">
          <img className="info-block__photo" src={IMG_PATH + FAQBlockItem.imgName} alt={FAQBlockItem.sign} />
          <div className="info-block__photo-sign">{FAQBlockItem.sign}</div>
        </div>
        <div className="info-block__about">
          <div className="info-block__about-title">{FAQBlockItem.title}</div>
          <div className="info-block__about-text">{FAQBlockItem.text}</div>
        </div>
      </div>
    )
  }
}

FAQBlock.propTypes = {
  FAQBlockItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    sign: PropTypes.string.isRequired
  }).isRequired
}

export default FAQBlock
