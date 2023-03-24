import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './assets/scss/_global.scss'
import './app/118n'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
)
