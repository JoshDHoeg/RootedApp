import React from 'react';
import '../../assets/styles/_intro.css';
// import weddings from './../../assets/images/weddings.png';
// import concert from './../../assets/images/concert.png';
// import spaces from './../../assets/images/spaces.png';
// import instapro from './../../assets/images/instapro.svg';

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
