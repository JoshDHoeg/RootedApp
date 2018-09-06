import React from 'react';

class Intro extends React.Component {
  constructor(props) {
      super(props);
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
          </section>
        );
    }
}

export default Intro;
