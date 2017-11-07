import React from 'react'
import Furniture from './Furniture'
import FAQBlock from './FAQBlock'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

function FAQSection({FAQBlocksData}) {
  let FAQBlocks = FAQBlocksData.map((FAQBlockItem, i) => {
    return (
      <FAQBlock
        key={FAQBlockItem.id}
        i={i}
        FAQBlockItem={FAQBlockItem}
      />
    )
  })

  return (
    <section className="faq container">
      <Furniture />
      <div className="faq__block faq__block--stamps">
        <div className="faq__title">Какая печать лучше?</div>
        {FAQBlocks}
      </div>
    </section>
  )
}

FAQSection.propTypes = {
  FAQBlocksData: PropTypes.array.isRequired
}

export default connect(({FAQBlocksData}) => ({FAQBlocksData}))(FAQSection)
