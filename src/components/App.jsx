import React from 'react'
import Catalog from './Catalog'
import FormDialog from './FormDialog'
import './App.scss'
import Counter from './Counter'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Catalog />
        <FormDialog />
        <Counter />
      </div>
    </Provider>
  )
}

export default App
