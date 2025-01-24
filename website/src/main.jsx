import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WebPage from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebPage/>
  </StrictMode>,
)
