import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();