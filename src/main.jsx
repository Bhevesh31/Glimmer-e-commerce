import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductContext>
    <AuthContext>
        <App />
    </AuthContext>
    
  </ProductContext>
    

)
