import React from 'react';
import {profile} from './../../api/profile';

export default class Profile extends React.Component {
  constructor(){
    super();
    this.state={
      profile:""
    }

  }


  render(){
    return(
      <div>
        dude this is a profile.
      </div>
    )
  }
}
