import React from 'react';
import { BrowserRouter as HashRouter, Route, Redirect, Switch } from "react-router-dom";

const Routing = (props) => {
    return <HashRouter>
      
        <Switch>
          <Route exact path='/:folderId/:fileId/:action(view|edit)' component={props.app} />
  
          <Route exact path='/' component={props.app} />
  
          <Redirect to="/" />
        </Switch>
  
     
    </HashRouter>
}

export default Routing