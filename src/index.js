import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/global.css';
import { SampleProvider } from './context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <SampleProvider>
    <App/>
    </SampleProvider>
    </React.StrictMode>
);