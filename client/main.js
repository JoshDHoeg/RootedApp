import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Home from '../imports/Home.jsx';
import './main.html';

Meteor.startup(() => {
render(<Home />, document.getElementById('app'));
});
