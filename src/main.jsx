import React from 'react';
import ReactDOM from 'react-dom/client';
import WheaterApp from './climaApp';
import './estilos/weather-style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheaterApp />
  </React.StrictMode>,
);