import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Home from '../imports/app/containers/Home.jsx';
import './main.html';

Meteor.startup(() => {
render(<Home />, document.getElementById('app'));
});
