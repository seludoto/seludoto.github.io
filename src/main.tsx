import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/global.css'

console.log('Main.tsx loaded')
console.log('Root element:', document.getElementById('root'))

const root = document.getElementById('root')
if (!root) {
  console.error('Root element not found!')
} else {
  createRoot(root).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
  console.log('React app rendered')
}
