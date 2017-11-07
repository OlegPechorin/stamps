import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {IMG_PATH} from '../constants'

function QualityBlock({qualityBlockData}) {
  let reasons = qualityBlockData.reasons.map((reason) => {
    return (
      <li key={reason.id} className="quality-block__reason">
        <div className="quality-block__reason-img-wrapper">
          <img src={IMG_PATH + reason.imgName} alt={reason.title} className="quality-block__reason-img"/>
        </div>
        <div className="quality-block__reason-title">{reason.title}</div>
        <div className="quality-block__reason-text">{reason.text}</div>
        <div className="quality-block__reason-bg"></div>
      </li>
    )
  })

  return (
  <div className="quality-block container">
    <div className="quality-block__title">{qualityBlockData.title}</div>
    <ul className="quality-block__reasons">
      {reasons}
    </ul>
  </div>
  )
}

QualityBlock.propTypres = {
  qualityBlockData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    reasons: PropTypes.array.isRequired
  }).isRequired
}

export default connect(({qualityBlockData}) => ({qualityBlockData}))(QualityBlock)
