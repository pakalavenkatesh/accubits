import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './appRedux/store';
import App from "./containers";
import {Route, Switch} from "react-router-dom";


const store = configureStore();

const NextApp = () =>
 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
       <App/>
      </Switch>
    </ConnectedRouter>
  </Provider>



export default NextApp;
