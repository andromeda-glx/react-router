import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import App from '../mini-projects/app1/App.jsx'
// import App from '../mini-projects/app2/App.jsx'
import "./server.js"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <App />
)
