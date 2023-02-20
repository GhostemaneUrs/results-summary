import React from 'react'
import App from './pages'
import './themes/main.scss'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
