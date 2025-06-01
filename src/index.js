import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';  // Only one router here
import store from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>  {/* This is your only router */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);