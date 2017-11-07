import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IMG_PATH} from '../constants'

function ProductionConcept({productionConceptData}) {
  return (
  <div className="production-concept">
    <div className="production-concept__title">{productionConceptData.title}</div>
    <div className="production-concept__about">
      <img className="production-concept__photo" src={IMG_PATH + productionConceptData.imgName} alt={productionConceptData.imgAlt} />
      <div className="production-concept__text-block">
        <div className="production-concept__text production-concept__text--with-line">{productionConceptData.text}</div>
        <div className="production-concept__text">{productionConceptData.text2}</div>
        <div className="production-concept__text production-concept__text--bold">{productionConceptData.textBold}</div>
      </div>
    </div>
  </div>
  )
}

ProductionConcept.propTypres = {
  productionConceptData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    textBold: PropTypes.string.isRequired,
  }).isRequired
}

export default connect(({productionConceptData}) => ({productionConceptData}))(ProductionConcept)
