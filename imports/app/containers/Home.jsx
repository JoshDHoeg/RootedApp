import React from 'react';

import Intro from './../components/Intro.jsx';
import AccountsUIWrapper from './../components/AccountsUIWrapper.jsx';

//styles
import './../../assets/styles/app.scss';


export default class Home extends React.Component {
render(){
  return(
     <div>
       <AccountsUIWrapper />
        <Intro />
     </div>
    )
  }
}
