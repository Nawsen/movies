import 'materialize-css/dist/css/materialize.css';
import './style.css'
import 'jquery/dist/jquery.js';
import 'angular';
import 'materialize-css/dist/js/materialize.js';

window.jQuery = require('jquery');
require('materialize-css');
window.Vel = require('materialize-css/js/velocity.min');

import appModule from './app/app.module';

angular.bootstrap(document, [appModule]);
