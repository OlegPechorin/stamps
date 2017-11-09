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
import Contacts from './Contacts'
import Footer from './Footer'
import '../scss/all.scss'
import Counter from './Counter'
import './FontsLoader'

function App() {
  return (
    <div className="">
      <Header />
      <FirstScreen />
      <Production />
      <FormBlock imgName={'form-block-photo-1.png'}/>
      <QualityBlock />
      <Catalog />
      <FormBlock imgName={'form-block-photo-2.png'}/>
      <FAQSection />
      <DeliverySection />
      <Feedback />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
