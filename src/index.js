import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";
import reducer from "./reducers";
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer, middleware);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
