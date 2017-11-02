import React, {Component} from 'react'
import ProductionList from './ProductionList'
import ProductionConcept from './ProductionConcept'
import ProductionFeatures from './ProductionFeatures'

function Production() {
  return (
    <div className="production">
      <ProductionList />
      <ProductionConcept />
      <ProductionFeatures />
    </div>
  )
}

export default Production
