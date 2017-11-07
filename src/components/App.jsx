import React from 'react'
import Header from './Header'
import FirstScreen from './FirstScreen'
import Production from './Production'
import FormBlock from './FormBlock'
import QualityBlock from './QualityBlock'
import Catalog from './Catalog'
import FormDialog from './FormDialog'
import FAQSection from './FAQSection'
import DeliverySection from './DeliverySection'
import Feedback from './Feedback'
import '../scss/all.scss'
import Counter from './Counter'
import {Provider} from 'react-redux'
import './FontsLoader'

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <FirstScreen />
        <Production />
        <FormBlock />
        <QualityBlock />
        <Catalog />
        <FormBlock />
        <FAQSection />
        <DeliverySection />
        <Feedback />

      </div>
    </Provider>
  )
}

export default App
