import React from 'react';

export default class Jumbotron extends React.Component {
  constructor(props){
   super(props)
  }

    render(){

        return (
          <section className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container">
              <h1 className="display-4">Design Your Landscape</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              <a href="" className="btn">Start Your Project</a>
            </div>
          </section>
        );
    }
}
