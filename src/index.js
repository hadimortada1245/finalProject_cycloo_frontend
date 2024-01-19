import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {thunk} from "redux-thunk";
import Reducers from "./reducers";
const store = createStore(Reducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Our store:", store.getState())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

