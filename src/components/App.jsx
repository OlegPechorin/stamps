import React from 'react'
import Header from './Header'
import FirstScreen from './FirstScreen'
import Production from './Production'
import FormBlock from './FormBlock'
import Catalog from './Catalog'
import FormDialog from './FormDialog'
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
        <Catalog />
        <FormDialog />
        <Counter />
      </div>
    </Provider>
  )
}

export default App
