import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import App from './App'
const Routing = (props) => {
    return <Router>
      <div>
        <Switch>
          <Route exact path='/:folderId/:fileId/:action(view|edit)' component={App} />
  
          <Route exact path='/' component={App} />
  
          <Redirect to="/" />
        </Switch>
  
      </div>
    </Router>
}

export default Routing