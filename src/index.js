import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import JWTAuthWrapper from './jwtauthwrapper'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JWTAuthWrapper/>
    </BrowserRouter>
  </React.StrictMode>
);
