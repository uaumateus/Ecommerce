import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import './styles/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CookiesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CookiesProvider>, 
document.getElementById('root'));

serviceWorker.unregister();
