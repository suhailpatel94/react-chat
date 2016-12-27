import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute,hashHistory  } from 'react-router';

import createRoom from './components/createRoom/createRoom.jsx';
import chat from './components/chat/chat.jsx';

ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {createRoom}></Route>
      <Route path = "/:room" component = {chat}></Route>
   </Router>
	
), document.getElementById('app'))
