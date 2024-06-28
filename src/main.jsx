import React from 'react';
import ReactDOM from 'react-dom/client';
import WheaterApp from '../src/wheaterApp';
import '../src/estilos/weather-style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheaterApp />
  </React.StrictMode>,
);