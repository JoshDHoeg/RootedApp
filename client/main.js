import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Home from '../imports/app/containers/Home.jsx';
import '../imports/startup/accounts-config.js';
import './main.html';


Meteor.startup(() => {
render(<Home />, document.getElementById('app'));
});
