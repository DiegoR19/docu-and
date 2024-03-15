import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Primer from './Primer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Inicio from './Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Header/>*/}
    {/*<Primer />*/}
    <Inicio/>
  </React.StrictMode>
);

reportWebVitals();
