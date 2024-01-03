import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './stylesAnimation.css'
import './custom.module.scss';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import { HashRouter, BrowserRouter } from 'react-router-dom';
import CartState from './context/cart/CartState'
import LanguageState from './context/language/LanguageState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageState>
    <CartState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartState>
  </LanguageState>,
)
