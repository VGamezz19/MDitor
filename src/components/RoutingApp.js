import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const Routing = (props) => {
    return <Router>
      <div>
        <Switch>
          <Route exact path='/:folderId/:fileId/:action(view|edit)' component={props.app} />
  
          <Route exact path='/' component={props.app} />
  
          <Redirect to="/" />
        </Switch>
  
      </div>
    </Router>
}

export default Routing