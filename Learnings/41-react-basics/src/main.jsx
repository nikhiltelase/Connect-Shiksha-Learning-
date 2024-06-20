import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import My from './my.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <My />
    <App />
  </React.StrictMode>,
)
