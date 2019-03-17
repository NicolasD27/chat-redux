// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';

// Logger with default options

import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/messages_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';



// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer
});


const store = createStore(
  reducers, {},
  applyMiddleware(promiseMiddleware, logger)
);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
