import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {App, RoutingApp} from './components/';

import './index.scss';

/**
 * Mandatory requires for React-Materialize package
 */
require('jquery');
require('hammerjs')
require('materialize-css')


ReactDOM.render( <RoutingApp app={App} />, document.getElementById('root'));
registerServiceWorker();