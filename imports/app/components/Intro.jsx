import React from 'react';
import {Profile} from './Profile.jsx';
// import {todoContainer} from './../../api/profiles';

export default class Intro extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: ""
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

    render(){
        return (
          <section id="intro" >
            <div className="container">
              <div id="title">
                <h1 className="text-right">Killer landscapes.<br /> Happy bees.</h1>
                <a className="btn" >Start Your Project</a>
              </div>
            </div>

            <Profile />

          </section>
        );
    }
}
