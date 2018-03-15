import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import RoutingApp from './components/';

import './index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <RoutingApp app={RoutingApp} />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();