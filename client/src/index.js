import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";

import "./index.css";
import App from './App';
import theme from "./theme/theme"
import { ThemeProvider } from '@material-ui/core';
import adminReducer from "./store/reducers/admin";
import snackbarReducer from "./store/reducers/snackbar";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose ;

const rootReducer = combineReducers({
  admin: adminReducer,
  snackbar: snackbarReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <App />
          </React.StrictMode> 
        </ThemeProvider>
      </BrowserRouter>   
  </Provider>
  ,document.getElementById('root'));
