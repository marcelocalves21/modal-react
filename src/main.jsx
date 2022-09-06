import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout} from './components/layout/Layout'
import ModalContextProvider from './context/ModalContextProvider'
import './normalize.css'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <ModalContextProvider>
    <Layout />
  </ModalContextProvider>
)
