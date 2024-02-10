// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Toaster containerStyle={{
    position: 'relative',
    top: '1rem',
    zIndex: '999999999'
  }}></Toaster>
    <Provider store={Store} >
      <App />
    </Provider>
  </BrowserRouter>
)
