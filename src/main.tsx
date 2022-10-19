import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/css/index.css'

const container = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
