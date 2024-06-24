import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Nav } from './Nav_bar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)
