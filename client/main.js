import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import {renderRoutes} from '../imports/app/containers/renderRoutes.jsx';
import '../imports/startup/accounts-config.js';
import './main.html';


Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
