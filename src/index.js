import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './redux/reducers/rootReducer';



const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

