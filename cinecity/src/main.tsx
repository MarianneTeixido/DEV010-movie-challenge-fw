import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FilterContextProvider } from './components/FilterContext/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>
    <FilterContextProvider>
    <App />
    </FilterContextProvider>
  </React.StrictMode>
)
