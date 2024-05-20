import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import { createRoot } from 'react-dom/client';


const store = configureStore({
  reducer: Reducers,
  middleware: [thunk],
});


const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
