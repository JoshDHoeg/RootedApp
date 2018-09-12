import React from 'react';
// import {todoContainer} from './../../api/profiles';
import axios from 'axios';

const darkSkyInstance = axios.create({
  baseURL: 'https://api.darksky.net/forecast/9ad30d6f0346897bb150df5336fe0d0d/'
});

export default class Intro extends React.Component {
  constructor(){
   super()
   this.state = {
       todo: "",
       zip: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    darkSkyInstance.get( '42.3601,-71.0589' )
    .then(res => {
      const zipdata = res.data;
      console.log(zipdata);
    });
  }

  handleChange(event) {
    this.setState({zip: event.target.value});
  }

  handleSubmit(event) {
    this.loadData();
    event.preventDefault();
  }
    render(){
        return (
          <section id="intro" >
            <p>Enter your Zipcode to find the perfect eco friendly plants for you environment</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="input-zip" type="text" value={this.state.zip} onChange={this.handleChange} />
            </label>
            <input className="input-submit" type="submit" value="Submit" />
          </form>

          </section>
        );
    }
}
