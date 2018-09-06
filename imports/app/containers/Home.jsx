import React from 'react';

import Intro from './../components/Intro.jsx';

//styles
import './../../assets/styles/app.scss';


export default class Home extends React.Component {
render(){
  return(
     <div>
        <Intro />
     </div>
    )
  }
}
